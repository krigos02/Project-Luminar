// Supabase Edge Function: send-contact-email
// Serves as the secure mediator to email contact form submissions to the site owner via Resend.
// Stores API keys and target emails securely on the server side to protect secrets.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")
const TO_EMAIL = Deno.env.get("TO_EMAIL") || "hello@krishnendugoswami.com"

serve(async (req) => {
  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      }
    })
  }

  console.log(`Received ${req.method} request to send-contact-email`);

  try {
    const payload = await req.json();
    console.log("Parsed request payload:", JSON.stringify(payload));
    
    // Webhook events send the record within `payload.record`.
    // Direct REST invocations might send it directly inside the payload root.
    const record = payload.record || payload;

    const name = record.name || [record.first_name, record.last_name].filter(Boolean).join(' ');
    const { email, subject, message, created_at } = record;

    console.log(`Processing contact submission: Name="${name}", Email="${email}", Subject="${subject}", HasMessage=${!!message}`);

    if (!name || !email || !subject) {
      console.warn("Validation failed: Missing name, email, or subject.");
      return new Response(
        JSON.stringify({ error: "Missing required submission fields (name, email, subject)." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }
        }
      );
    }

    const submissionDate = created_at ? new Date(created_at).toLocaleString('en-US', { timeZone: 'UTC' }) + ' UTC' : new Date().toLocaleString();

    const emailHtmlBody = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 4px;">
        <h2 style="color: #c9a96e; border-bottom: 1px solid #eaeaea; padding-bottom: 10px; margin-top: 0;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 120px;">Sender Name:</td>
            <td style="padding: 6px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">Email:</td>
            <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">Subject:</td>
            <td style="padding: 6px 0;">${subject}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">Submitted At:</td>
            <td style="padding: 6px 0;">${submissionDate}</td>
          </tr>
        </table>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #c9a96e; font-style: normal; margin-top: 10px;">
          <h4 style="margin: 0 0 10px 0; color: #555;">Message Content:</h4>
          <p style="margin: 0; white-space: pre-wrap;">${message || '(No message provided)'}</p>
        </div>
      </div>
    `;

    console.log("Sending request to Resend API...");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY environment variable is not defined on the Supabase Edge Function.");
    }

    // Call Resend API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: "Luminar Portfolio <onboarding@resend.dev>",
        to: TO_EMAIL,
        subject: `New Contact Form Submission - ${subject}`,
        html: emailHtmlBody,
        reply_to: email
      })
    });

    const result = await resendResponse.json();
    console.log("Resend API response status:", resendResponse.status, "body:", JSON.stringify(result));

    if (!resendResponse.ok) {
      throw new Error(result.message || `Resend API Error (Status: ${resendResponse.status})`);
    }

    console.log("Email successfully sent via Resend. Message ID:", result.id);

    return new Response(
      JSON.stringify({ success: true, messageId: result.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }
      }
    );
  } catch (err) {
    console.error("Error processing request in send-contact-email:", err.message);
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }
      }
    );
  }
})

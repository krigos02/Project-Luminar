# ── GENERATE STATIC PHOTO PAGES & SITEMAPS ──
# Run: powershell -ExecutionPolicy Bypass -File "d:\Downloads\portfolio\scripts\generate-photo-pages.ps1"

$ErrorActionPreference = "Stop"

$projectRoot = "d:\Downloads\portfolio"
$photoDir = Join-Path $projectRoot "photo"
$dataJsPath = Join-Path $projectRoot "data.js"
$sitemapXmlPath = Join-Path $projectRoot "sitemap.xml"
$sitemapImagesPath = Join-Path $projectRoot "sitemap-images.xml"

if (-not (Test-Path $photoDir)) {
    New-Item -ItemType Directory -Path $photoDir | Out-Null
}

# Extract DEFAULT_SITE_DATA from data.js between "const DEFAULT_SITE_DATA = {" and "} };"
$rawContent = Get-Content $dataJsPath -Raw
$startIdx = $rawContent.IndexOf("const DEFAULT_SITE_DATA = {")
if ($startIdx -lt 0) { Write-Error "Cannot find start of DEFAULT_SITE_DATA"; exit 1 }

$jsonStart = $startIdx + "const DEFAULT_SITE_DATA = ".Length
$endIdx = $rawContent.IndexOf("};`n`n// Supabase Configuration", $jsonStart)
if ($endIdx -lt 0) {
    $endIdx = $rawContent.IndexOf("};`r`n`r`n// Supabase Configuration", $jsonStart)
}
if ($endIdx -lt 0) {
    $endIdx = $rawContent.IndexOf("};`n// Supabase Configuration", $jsonStart)
}

if ($endIdx -lt 0) {
    # Fallback to last occurrence before // Supabase Configuration
    $supIdx = $rawContent.IndexOf("// Supabase Configuration")
    $endIdx = $rawContent.LastIndexOf("};", $supIdx)
}

if ($endIdx -lt 0) { Write-Error "Cannot find end of DEFAULT_SITE_DATA"; exit 1 }

$jsonStr = $rawContent.Substring($jsonStart, ($endIdx - $jsonStart) + 1).Trim()

$siteData = $jsonStr | ConvertFrom-Json

# Helper to create URL slug from title/ID
function Get-Slug([string]$title, [int]$id) {
    if (-not $title) { $title = "photograph" }
    $slug = $title.ToLower().Trim()
    $slug = $slug -replace '[^\w\s-]', ''
    $slug = $slug -replace '[\s_]+', '-'
    $slug = $slug -replace '-+', '-'
    $slug = $slug.Trim('-')
    if (-not $slug) { $slug = "photo" }
    return $slug
}

# Collect all photos
$allPhotos = @()
$seenPhotoKeys = @{}

if ($siteData.galleryCategories) {
    foreach ($catProp in $siteData.galleryCategories.psobject.Properties) {
        $catKey = $catProp.Name
        $catObj = $catProp.Value
        if ($catObj.photos) {
            foreach ($p in $catObj.photos) {
                if ($p.src) {
                    $key = "$($p.id)-$($p.src)"
                    if (-not $seenPhotoKeys.ContainsKey($key)) {
                        $seenPhotoKeys[$key] = $true
                        $pObj = [PSCustomObject]@{
                            id = if ($null -ne $p.id) { [int]$p.id } else { 0 }
                            title = if ($p.title) { [string]$p.title } else { "Photograph" }
                            cat = $catKey
                            src = [string]$p.src
                            caption = if ($p.caption) { [string]$p.caption } else { "" }
                            story = if ($p.story) { [string]$p.story } else { "" }
                            loc = if ($p.loc) { [string]$p.loc } else { "" }
                            cam = if ($p.cam) { [string]$p.cam } else { "" }
                            lens = if ($p.lens) { [string]$p.lens } else { "" }
                            exp = if ($p.exp) { [string]$p.exp } else { "" }
                            iso = if ($p.iso) { [string]$p.iso } else { "" }
                            focal = if ($p.focal) { [string]$p.focal } else { "" }
                            date = if ($p.date) { [string]$p.date } else { "" }
                            shutter = if ($p.shutter) { [string]$p.shutter } else { "" }
                            aperture = if ($p.aperture) { [string]$p.aperture } else { "" }
                            telescope = if ($p.telescope) { [string]$p.telescope } else { "" }
                            tag = if ($p.tag) { [string]$p.tag } else { "" }
                        }
                        $allPhotos += $pObj
                    }
                }
            }
        }
    }
}

if ($siteData.homepagePhotos) {
    foreach ($p in $siteData.homepagePhotos) {
        if ($p.src) {
            $key = "$($p.id)-$($p.src)"
            if (-not $seenPhotoKeys.ContainsKey($key)) {
                $seenPhotoKeys[$key] = $true
                $catKey = if ($p.cat) { [string]$p.cat } else { "general" }
                $pObj = [PSCustomObject]@{
                    id = if ($null -ne $p.id) { [int]$p.id } else { 0 }
                    title = if ($p.title) { [string]$p.title } else { "Photograph" }
                    cat = $catKey
                    src = [string]$p.src
                    caption = if ($p.meta) { [string]$p.meta } else { "" }
                    story = ""
                    loc = ""
                    cam = ""
                    lens = ""
                    exp = if ($p.exif) { [string]$p.exif } else { "" }
                    iso = ""
                    focal = ""
                    date = ""
                    shutter = ""
                    aperture = ""
                    telescope = ""
                    tag = ""
                }
                $allPhotos += $pObj
            }
        }
    }
}

# Assign unique slugs
$usedSlugs = @{}
foreach ($p in $allPhotos) {
    $baseSlug = Get-Slug $p.title $p.id
    $finalSlug = $baseSlug
    if ($usedSlugs.ContainsKey($finalSlug)) {
        $finalSlug = "$baseSlug-$($p.id)"
    }
    $usedSlugs[$finalSlug] = $true
    $p | Add-Member -MemberType NoteProperty -Name "slug" -Value $finalSlug
}

Write-Host "Total unique photos collected:" $allPhotos.Count

for ($i = 0; $i -lt $allPhotos.Count; $i++) {
    $photo = $allPhotos[$i]
    $prevPhoto = if ($i -gt 0) { $allPhotos[$i - 1] } else { $allPhotos[$allPhotos.Count - 1] }
    $nextPhoto = if ($i -lt ($allPhotos.Count - 1)) { $allPhotos[$i + 1] } else { $allPhotos[0] }
    
    $relatedList = @($allPhotos | Where-Object { $_.slug -ne $photo.slug -and $_.cat -eq $photo.cat })
    if ($relatedList.Count -lt 4) {
        $otherList = @($allPhotos | Where-Object { $_.slug -ne $photo.slug -and $_.cat -ne $photo.cat })
        $relatedList += $otherList
    }
    $relatedList = $relatedList | Select-Object -First 4

    $pageTitle = "$($photo.title) — $($photo.cat.ToUpper()) Photography by Krishnendu Goswami"
    $pageDesc = if ($photo.story) { $photo.story } elseif ($photo.caption) { "$($photo.title) - $($photo.caption). Fine art $($photo.cat) photography by Krishnendu Goswami." } else { "$($photo.title) - Fine art $($photo.cat) photography by Krishnendu Goswami." }
    $cleanDesc = $pageDesc -replace '"', '&quot;' -replace '\s+', ' '
    if ($cleanDesc.Length -gt 160) { $cleanDesc = $cleanDesc.Substring(0, 157) + "..." }
    
    $canonicalUrl = "https://krishnendugoswami.com/photo/$($photo.slug).html"
    $galleryDeepLink = "../gallery.html?category=$([System.Web.HttpUtility]::UrlEncode($photo.cat))&photo=$($photo.id)"

    # HTML Template
    $htmlContent = @"
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>$pageTitle</title>
<meta name="description" content="$cleanDesc">
<link rel="canonical" href="$canonicalUrl">

<!-- Favicons -->
<link rel="icon" type="image/png" sizes="32x32" href="../favicon.png?v=2.5">
<link rel="icon" type="image/png" sizes="16x16" href="../favicon.png?v=2.5">

<!-- Open Graph / Social Media -->
<meta property="og:type" content="article">
<meta property="og:url" content="$canonicalUrl">
<meta property="og:title" content="$pageTitle">
<meta property="og:description" content="$cleanDesc">
<meta property="og:image" content="$($photo.src)">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="800">
<meta property="og:site_name" content="Krishnendu Goswami Portfolio">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="$canonicalUrl">
<meta name="twitter:title" content="$pageTitle">
<meta name="twitter:description" content="$cleanDesc">
<meta name="twitter:image" content="$($photo.src)">

<!-- Resource Preconnects & Styles -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://res.cloudinary.com">
<link href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../shared.css?v=3.6">

<!-- Structured Data (Schema.org) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageObject",
      "@id": "$canonicalUrl#image",
      "url": "$($photo.src)",
      "contentUrl": "$($photo.src)",
      "thumbnailUrl": "$($photo.src)",
      "name": "$($photo.title)",
      "caption": "$($photo.caption)",
      "description": "$cleanDesc",
      "representativeOfPage": true,
      "datePublished": "$($photo.date)",
      "creator": {
        "@type": "Person",
        "name": "Krishnendu Goswami",
        "url": "https://krishnendugoswami.com/"
      },
      "author": {
        "@type": "Person",
        "name": "Krishnendu Goswami",
        "url": "https://krishnendugoswami.com/"
      },
      "copyrightHolder": {
        "@type": "Person",
        "name": "Krishnendu Goswami"
      },
      "copyrightNotice": "© Krishnendu Goswami. All rights reserved.",
      "creditText": "Krishnendu Goswami",
      "license": "https://krishnendugoswami.com/about.html"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://krishnendugoswami.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Gallery",
          "item": "https://krishnendugoswami.com/gallery.html"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "$($photo.title)",
          "item": "$canonicalUrl"
        }
      ]
    }
  ]
}
</script>

<style>
  :root { --content-w: 1100px; }
  body { background: var(--bg); color: var(--text); font-family: var(--font-sans); line-height: 1.6; }
  .photo-page-wrap { max-width: var(--content-w); margin: 2rem auto; padding: 0 1.5rem; }
  .photo-header-nav { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; border-bottom: 1px solid var(--border); padding-bottom: 1rem; }
  .photo-nav-back { color: var(--gold); font-size: 13px; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; }
  .photo-stage { width: 100%; border: 1px solid var(--border); background: #000; border-radius: 4px; overflow: hidden; display: flex; justify-content: center; align-items: center; margin-bottom: 2rem; max-height: 80vh; }
  .photo-stage img { max-width: 100%; max-height: 80vh; object-fit: contain; display: block; }
  .photo-details-grid { display: grid; grid-template-columns: 1fr 340px; gap: 2.5rem; margin-bottom: 3rem; }
  @media (max-width: 850px) { .photo-details-grid { grid-template-columns: 1fr; } }
  .photo-meta-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 6px; padding: 1.5rem; }
  .photo-meta-title { font-family: var(--font-serif); font-size: 1.1rem; color: var(--gold); margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; }
  .photo-meta-row { display: flex; justify-content: space-between; font-size: 12.5px; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
  .photo-meta-label { color: var(--text3); }
  .photo-meta-val { color: var(--text); font-weight: 500; text-align: right; }
  .btn-interactive-gallery { display: block; width: 100%; text-align: center; background: var(--gold); color: #000; font-weight: 600; padding: 12px 20px; border-radius: 4px; text-decoration: none; font-size: 13px; margin-top: 1.5rem; transition: transform 0.2s ease, filter 0.2s ease; }
  .btn-interactive-gallery:hover { transform: translateY(-2px); filter: brightness(1.1); }
  .photo-pagination { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 1.2rem 0; margin-bottom: 3rem; }
  .photo-pag-link { color: var(--text2); text-decoration: none; font-size: 13px; display: flex; align-items: center; gap: 8px; }
  .photo-pag-link:hover { color: var(--gold); }
  .related-photos-title { font-family: var(--font-serif); font-size: 1.4rem; color: var(--text); margin-bottom: 1.5rem; text-align: center; }
  .related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1.2rem; }
  .related-card { border: 1px solid var(--border); border-radius: 4px; overflow: hidden; background: var(--bg2); text-decoration: none; color: inherit; transition: transform 0.3s ease; }
  .related-card:hover { transform: translateY(-4px); border-color: var(--gold); }
  .related-card img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }
  .related-card-body { padding: 10px 12px; }
  .related-card-t { font-family: var(--font-serif); font-size: 13px; color: var(--text); }
</style>
</head>
<body>

<!-- Header -->
<header class="site-header" role="banner" style="position:relative;">
  <div class="container" style="display:flex; align-items:center; justify-content:space-between; padding: 1rem 1.5rem;">
    <a href="../index.html" class="brand-logo" style="text-decoration:none; color:var(--text); font-family:var(--font-serif); font-size:1.2rem;">Krishnendu Goswami</a>
    <nav class="site-nav">
      <ul class="nav-menu" style="display:flex; gap:1.5rem; list-style:none; margin:0; padding:0; font-size:12px;">
        <li><a href="../index.html" style="color:var(--text2); text-decoration:none;">Home</a></li>
        <li><a href="../portfolio.html" style="color:var(--text2); text-decoration:none;">Portfolio</a></li>
        <li><a href="../gallery.html" style="color:var(--gold); text-decoration:none;">Gallery</a></li>
        <li><a href="../about.html" style="color:var(--text2); text-decoration:none;">About</a></li>
        <li><a href="../contact.html" style="color:var(--text2); text-decoration:none;">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<main class="photo-page-wrap">
  <!-- Top Navigation & H1 -->
  <div class="photo-header-nav">
    <a href="../gallery.html?category=$([System.Web.HttpUtility]::UrlEncode($photo.cat))" class="photo-nav-back">← Back to $($photo.cat.ToUpper()) Gallery</a>
    <span style="font-size:12px; color:var(--text3);">Photograph #$($photo.id)</span>
  </div>

  <h1 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--text); margin-bottom: 1.5rem; text-align: center;">$($photo.title)</h1>

  <!-- Hero Photo Stage -->
  <div class="photo-stage">
    <img src="$($photo.src)" alt="$($photo.title) — Fine Art $($photo.cat) Photography by Krishnendu Goswami" width="1200" height="800" decoding="async">
  </div>

  <!-- Details Grid -->
  <div class="photo-details-grid">
    <div>
      $(if ($photo.story) { "<h2 style='font-family:var(--font-serif); font-size:1.3rem; color:var(--gold); margin-bottom:0.8rem;'>Story &amp; Narrative</h2><p style='color:var(--text2); font-size:14px; margin-bottom:1.5rem;'>$($photo.story)</p>" })
      $(if ($photo.caption) { "<h3 style='font-family:var(--font-serif); font-size:1.1rem; color:var(--text); margin-bottom:0.5rem;'>Caption</h3><p style='color:var(--text3); font-size:13.5px; margin-bottom:1.5rem;'>$($photo.caption)</p>" })
      
      <div style="background: var(--bg2); border-left: 3px solid var(--gold); padding: 1rem 1.2rem; margin-top: 1.5rem; border-radius: 0 4px 4px 0;">
        <h4 style="font-size: 13px; color: var(--text); margin-bottom: 0.3rem;">Artist &amp; Licensing Notice</h4>
        <p style="font-size: 12px; color: var(--text3); margin: 0;">Photographed by <strong>Krishnendu Goswami</strong>. All rights reserved. For fine-art prints, commercial licensing, or exhibition inquiries, contact <a href="../contact.html" style="color:var(--gold);">Krishnendu Goswami Contact</a>.</p>
      </div>
    </div>

    <!-- Metadata Technical Sidebar -->
    <div class="photo-meta-card">
      <div class="photo-meta-title">Technical Details</div>
      
      <div class="photo-meta-row"><span class="photo-meta-label">Category</span><span class="photo-meta-val" style="text-transform:capitalize;">$($photo.cat)</span></div>
      $(if ($photo.loc) { "<div class='photo-meta-row'><span class='photo-meta-label'>Location</span><span class='photo-meta-val'>$($photo.loc)</span></div>" })
      $(if ($photo.cam) { "<div class='photo-meta-row'><span class='photo-meta-label'>Camera</span><span class='photo-meta-val'>$($photo.cam)</span></div>" })
      $(if ($photo.lens) { "<div class='photo-meta-row'><span class='photo-meta-label'>Lens</span><span class='photo-meta-val'>$($photo.lens)</span></div>" })
      $(if ($photo.shutter) { "<div class='photo-meta-row'><span class='photo-meta-label'>Shutter</span><span class='photo-meta-val'>$($photo.shutter)</span></div>" })
      $(if ($photo.aperture) { "<div class='photo-meta-row'><span class='photo-meta-label'>Aperture</span><span class='photo-meta-val'>$($photo.aperture)</span></div>" })
      $(if ($photo.iso) { "<div class='photo-meta-row'><span class='photo-meta-label'>ISO</span><span class='photo-meta-val'>$($photo.iso)</span></div>" })
      $(if ($photo.focal) { "<div class='photo-meta-row'><span class='photo-meta-label'>Focal Length</span><span class='photo-meta-val'>$($photo.focal)</span></div>" })
      $(if ($photo.telescope) { "<div class='photo-meta-row'><span class='photo-meta-label'>Telescope/Mount</span><span class='photo-meta-val'>$($photo.telescope)</span></div>" })
      $(if ($photo.date) { "<div class='photo-meta-row'><span class='photo-meta-label'>Date</span><span class='photo-meta-val'>$($photo.date)</span></div>" })

      <!-- Button to Open Interactive Gallery -->
      <a href="$galleryDeepLink" class="btn-interactive-gallery">View in Interactive Gallery ✨</a>
    </div>
  </div>

  <!-- Pagination Links -->
  <div class="photo-pagination">
    <a href="$($prevPhoto.slug).html" class="photo-pag-link">← Previous: $($prevPhoto.title)</a>
    <a href="../gallery.html" class="photo-pag-link" style="color:var(--gold);">All Galleries</a>
    <a href="$($nextPhoto.slug).html" class="photo-pag-link">Next: $($nextPhoto.title) →</a>
  </div>

  <!-- Related Photographs -->
  <div>
    <h3 class="related-photos-title">More from $($photo.cat.ToUpper()) &amp; Collection</h3>
    <div class="related-grid">
      $(
        $relHtml = ""
        foreach ($rel in $relatedList) {
          $relHtml += @"
      <a href="$($rel.slug).html" class="related-card">
        <img src="$($rel.src)" alt="$($rel.title)" loading="lazy" decoding="async">
        <div class="related-card-body">
          <div class="related-card-t">$($rel.title)</div>
        </div>
      </a>
"@
        }
        $relHtml
      )
    </div>
  </div>
</main>

<footer class="mini-footer" style="text-align:center; padding:2rem 0; border-top:1px solid var(--border); margin-top:4rem; color:var(--text3); font-size:12px;">
  <p>© 2026 Krishnendu Goswami · All Rights Reserved</p>
</footer>

</body>
</html>
"@

    $outFilePath = Join-Path $photoDir "$($photo.slug).html"
    Set-Content -Path $outFilePath -Value $htmlContent -Encoding UTF8
}

Write-Host "Generated $($allPhotos.Count) static photo pages in /photo/"

# ── UPDATE SITEMAP.XML ──
$sitemapXmlContent = @"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://krishnendugoswami.com/</loc><lastmod>2026-07-28</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://krishnendugoswami.com/portfolio.html</loc><lastmod>2026-07-28</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://krishnendugoswami.com/gallery.html</loc><lastmod>2026-07-28</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://krishnendugoswami.com/stories.html</loc><lastmod>2026-07-28</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://krishnendugoswami.com/project.html</loc><lastmod>2026-07-28</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://krishnendugoswami.com/blog.html</loc><lastmod>2026-07-28</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://krishnendugoswami.com/about.html</loc><lastmod>2026-07-28</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://krishnendugoswami.com/contact.html</loc><lastmod>2026-07-28</lastmod><changefreq>monthly</changefreq><priority>0.5</priority></url>
"@

foreach ($p in $allPhotos) {
    $sitemapXmlContent += "`n  <url><loc>https://krishnendugoswami.com/photo/$($p.slug).html</loc><lastmod>2026-07-28</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>"
}
$sitemapXmlContent += "`n</urlset>`n"
Set-Content -Path $sitemapXmlPath -Value $sitemapXmlContent -Encoding UTF8
Write-Host "Updated sitemap.xml with $($allPhotos.Count) photo URLs"

# ── UPDATE SITEMAP-IMAGES.XML ──
$sitemapImgContent = @"
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://krishnendugoswami.com/about.html</loc>
    <image:image>
      <image:loc>https://res.cloudinary.com/yrwqu5an/image/upload/v1783681897/image_wh8xie.webp</image:loc>
      <image:title>Krishnendu Goswami - Award Winning Astrophotographer and Visual Storyteller</image:title>
      <image:caption>Krishnendu Goswami is a nationally exhibited photographer and award-winning astrophotographer based in West Bengal, India.</image:caption>
    </image:image>
  </url>
"@

foreach ($p in $allPhotos) {
    $safeTitle = [System.Web.HttpUtility]::HtmlEncode($p.title)
    $safeCap = if ($p.caption) { [System.Web.HttpUtility]::HtmlEncode($p.caption) } else { $safeTitle }
    $sitemapImgContent += @"

  <url>
    <loc>https://krishnendugoswami.com/photo/$($p.slug).html</loc>
    <image:image>
      <image:loc>$($p.src)</image:loc>
      <image:title>$safeTitle</image:title>
      <image:caption>$safeCap</image:caption>
    </image:image>
  </url>
"@
}
$sitemapImgContent += "`n</urlset>`n"
Set-Content -Path $sitemapImagesPath -Value $sitemapImgContent -Encoding UTF8
Write-Host "Updated sitemap-images.xml with $($allPhotos.Count) image URLs"
Write-Host "Generator execution complete!"

/* ── STRING UTILITIES ── */
function formatToTitleCase(str) {
  if (!str) return '';
  return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}
window.formatToTitleCase = formatToTitleCase;

/* ── THEME TOGGLE ── */
const THEME_STORAGE_KEY = 'luminar-theme';

const getStoredTheme = () => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
};

const setStoredTheme = (theme) => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage restrictions; the toggle still works for this page view.
  }
};

const getPreferredTheme = () => {
  const stored = getStoredTheme();
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-toggle').forEach(button => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', `Switch to ${nextTheme} mode`);
    button.setAttribute('title', `Switch to ${nextTheme} mode`);
    button.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    const label = button.querySelector('.theme-toggle-label');
    if (label) label.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
  });
};

applyTheme(getPreferredTheme());

const createThemeToggle = (mobile = false) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = mobile ? 'theme-toggle mobile-theme-toggle' : 'theme-toggle';
  button.innerHTML = `
    <svg class="theme-icon-sun" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
    </svg>
    <svg class="theme-icon-moon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 14.4A8 8 0 0 1 9.6 3 7 7 0 1 0 21 14.4Z"></path>
    </svg>
    ${mobile ? '<span class="theme-toggle-label"></span>' : '<span class="sr-only theme-toggle-label"></span>'}
  `;
  button.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    const nextTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    setStoredTheme(nextTheme);
  });
  return button;
};

const setupThemeToggles = () => {
  const headerActions = document.querySelector('#header .header-actions');
  if (headerActions && !headerActions.querySelector('.theme-toggle')) {
    const desktopToggle = createThemeToggle(false);
    const hamburger = headerActions.querySelector('.nav-hamburger');
    headerActions.insertBefore(desktopToggle, hamburger || null);
  }

  // Support theme toggle inside Admin CMS header
  const adminActions = document.querySelector('.admin-actions');
  if (adminActions && !adminActions.querySelector('.theme-toggle')) {
    const adminToggle = createThemeToggle(false);
    adminActions.insertBefore(adminToggle, adminActions.firstChild);
  }

  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.querySelector('.theme-toggle')) {
    mobileMenu.appendChild(createThemeToggle(true));
  }

  applyTheme(document.documentElement.getAttribute('data-theme') || getPreferredTheme());
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupThemeToggles);
} else {
  setupThemeToggles();
}

/* ── IMAGE PROTECTION ── */
document.addEventListener('contextmenu', e => {
  if (
    e.target.tagName === 'IMG' || 
    e.target.closest('.feat-card') || 
    e.target.closest('.gallery-item') || 
    e.target.closest('.proj-image-wrap') || 
    e.target.closest('#lightbox') ||
    e.target.closest('.about-img-frame')
  ) {
    e.preventDefault();
  }
});
document.addEventListener('dragstart', e => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u')) {
    e.preventDefault();
  }
});

/* ── MINIMALIST 35MM FILM CANISTER PRELOADER ── */
function initFilmPreloader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // Inject film canister preloader HTML into the loader container
  if (!loader.querySelector('.film-loader-stage')) {
    loader.innerHTML = `
      <div class="loader-logo">Krishnendu Goswami</div>
      <div class="film-loader-stage">
        <div class="film-window">
          <div class="film-track">
            <div class="film-frame" data-word="LIGHTS">LIGHTS</div>
            <div class="film-frame" data-word="CAMERA">CAMERA</div>
            <div class="film-frame" data-word="PATIENCE">PATIENCE</div>
          </div>
        </div>
        <div class="film-canister">
          <div class="can-cap top"><span class="can-spool"></span></div>
          <div class="can-body"></div>
          <div class="can-lip"></div>
          <div class="can-cap bottom"><span class="can-foot"></span></div>
        </div>
      </div>
    `;
  }

  const win = loader.querySelector('.film-window');
  const track = loader.querySelector('.film-track');
  const frames = Array.from(loader.querySelectorAll('.film-frame'));
  const canister = loader.querySelector('.film-canister');

  if (!win || !track || !frames.length || !canister) return;

  function runLayout() {
    const frameW = frames[0].offsetWidth || 150;
    const total = frameW * frames.length;
    win.style.left = (canister.offsetLeft + canister.offsetWidth - 8) + 'px';
    track.style.transform = 'translateX(' + -total + 'px)';

    const UNWIND = 2000;
    const HOLD = 600;
    const REWIND = 800;
    const RESET = 200;

    function unwind() {
      if (loader.classList.contains('hidden')) return;
      track.style.transition = 'transform ' + UNWIND + 'ms cubic-bezier(0.25, 1, 0.5, 1)';
      track.style.transform = 'translateX(0)';
      setTimeout(rewind, UNWIND + HOLD);
    }

    function rewind() {
      if (loader.classList.contains('hidden')) return;
      track.style.transition = 'transform ' + REWIND + 'ms ease-in';
      track.style.transform = 'translateX(' + -total + 'px)';
      setTimeout(unwind, REWIND + RESET);
    }

    setTimeout(unwind, 150);
  }

  requestAnimationFrame(runLayout);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFilmPreloader);
} else {
  initFilmPreloader();
}

let pageIsFullyLoaded = false;

function dismissLoader() {
  const loader = document.getElementById('loader');
  if (loader && !loader.classList.contains('hidden')) {
    loader.classList.add('hidden');
  }
}

// Track actual page asset load event
window.addEventListener('load', () => {
  pageIsFullyLoaded = true;
  // Ensure minimum aesthetic display time of 1200ms so animation is smooth, then dismiss
  setTimeout(dismissLoader, 1200);
});

// Also dismiss if siteDataLoaded fires after page load
document.addEventListener('siteDataLoaded', () => {
  if (document.readyState === 'complete') {
    setTimeout(dismissLoader, 800);
  }
});

// Absolute safety fallback (max 5s) in case network hangs or images stall
setTimeout(dismissLoader, 5000);

/* ── NAV BACKGROUND SCROLL TARIFF ── */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── MOBILE MENU ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const open = mobileMenu.classList.contains('open');
    const spans = hamburger.querySelectorAll('span');
    if (spans.length >= 3) {
      spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : 'none';
      spans[1].style.opacity = open ? '0' : '1';
      spans[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : 'none';
    }
  });
  
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const spans = hamburger.querySelectorAll('span');
      if (spans.length >= 3) {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });
}

/* ── CUSTOM CURSOR ── */
if (window.matchMedia('(pointer:fine)').matches) {
  document.body.classList.add('has-cursor');
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  
  if (cursor && ring) {
    let rx = 0, ry = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', e => {
      cx = e.clientX;
      cy = e.clientY;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
    });
    
    function animRing() {
      rx += (cx - rx) * 0.15;
      ry += (cy - ry) * 0.15;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animRing);
    }
    animRing();
    
    const hoverSelectors = 'a, button, .feat-card, .cat-card, .project-item, .blog-card, .gallery-item, .lb-topbar-btn, .lb-nav-btn, .testi-btn, .testi-dot, .view-btn, .filter-tab, .masonry-item, .filter-btn, .lb-btn, .journal-item';
    
    const bindCursorHover = (elements) => {
      elements.forEach(el => {
        if (!el.dataset.cursorBound) {
          el.dataset.cursorBound = 'true';
          el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
          el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        }
      });
    };
    
    bindCursorHover(document.querySelectorAll(hoverSelectors));
    
    // Watch for dynamically added interactive elements
    const observer = new MutationObserver(() => {
      bindCursorHover(document.querySelectorAll(hoverSelectors));
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

/* ── LIGHTBOX DYNAMIC OVERLAY POSITIONING ── */
window.repositionLbOverlays = function() {
  const lbImg = document.getElementById('lb-img');
  const titleGroup = document.querySelector('.lb-overlay-title-group');
  const actionsCard = document.querySelector('.lb-actions-card');
  if (!lbImg || !titleGroup) return;

  const rect = lbImg.getBoundingClientRect();
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  // Full Left negative space: exact distance from screen left edge (0px) to photo left edge
  const fullLeftSpace = rect.left > 0 ? rect.left : 0;
  
  if (fullLeftSpace > 60) {
    // Max width set to full left space minus 32px safe side margins
    const maxBoxWidth = Math.max(120, fullLeftSpace - 32);
    titleGroup.style.width = `${maxBoxWidth}px`;
    titleGroup.style.maxWidth = `${maxBoxWidth}px`;

    const titleWidth = titleGroup.offsetWidth || maxBoxWidth;
    const titleHeight = titleGroup.offsetHeight || 60;
    
    // Exact mathematical center between screen left edge (0px) and photo left edge (rect.left)
    const centerLeft = (fullLeftSpace - titleWidth) / 2;

    // Position vertically centered in the UPPER half empty space (top quadrant)
    const upperSpaceHeight = rect.top > 0 ? (rect.top + (rect.height / 2)) : (screenH / 2);
    const centerTop = Math.max(24, (upperSpaceHeight - titleHeight) / 2);

    titleGroup.style.position = 'fixed';
    titleGroup.style.left = `${centerLeft}px`;
    titleGroup.style.top = `${centerTop}px`;
  } else {
    // Mobile / small screen fallback
    titleGroup.style.position = 'fixed';
    titleGroup.style.left = '20px';
    titleGroup.style.top = '20px';
    titleGroup.style.width = 'auto';
    titleGroup.style.maxWidth = 'calc(100vw - 40px)';
  }

  // Right negative space: available width between photo right edge and right nav button
  if (actionsCard) {
    const availRightWidth = (screenW - rect.right) > navBtnClearance ? ((screenW - rect.right) - navBtnClearance - 20) : 0;
    
    if (availRightWidth > 80) {
      actionsCard.style.width = 'auto';
      actionsCard.style.maxWidth = `${availRightWidth}px`;

      const cardWidth = actionsCard.offsetWidth || 180;
      const cardHeight = actionsCard.offsetHeight || 60;

      // Position horizontally centered in the right empty space
      const centerRight = navBtnClearance + (availRightWidth - cardWidth) / 2;
      // Position vertically centered in screen
      const centerBottom = Math.max(16, (screenH - cardHeight) / 2);

      actionsCard.style.position = 'fixed';
      actionsCard.style.right = `${centerRight}px`;
      actionsCard.style.bottom = `${centerBottom}px`;
      actionsCard.style.left = 'auto';
      actionsCard.style.top = 'auto';
    } else {
      actionsCard.style.position = 'fixed';
      actionsCard.style.right = '20px';
      actionsCard.style.bottom = '20px';
      actionsCard.style.left = 'auto';
      actionsCard.style.top = 'auto';
      actionsCard.style.maxWidth = 'calc(100vw - 40px)';
    }
  }
};

window.addEventListener('resize', window.repositionLbOverlays);
document.addEventListener('DOMContentLoaded', () => {
  const lbImg = document.getElementById('lb-img');
  if (lbImg) {
    lbImg.addEventListener('load', window.repositionLbOverlays);
  }
});
const setupScrollReveal = () => {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealEls.length > 0) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    
    revealEls.forEach(el => revealObs.observe(el));
  }
};
document.addEventListener('DOMContentLoaded', setupScrollReveal);
// Fallback if DOMContentLoaded already fired
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  setupScrollReveal();
}

/* ── SMOOTH ANCHOR SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── DYNAMIC LOGO & COPYRIGHT BINDINGS ── */
function updateDynamicLayout() {
  if (window.siteData && window.siteData.profile) {
    const profile = window.siteData.profile;
    
    // Update brand logos
    document.querySelectorAll('.brand-logo').forEach(logo => {
      const name = profile.name || 'Krishnendu Goswami';
      const parts = name.split(' ');
      const first = parts[0] || '';
      const rest = parts.slice(1).join(' ') || '';
      logo.innerHTML = `<span class="brand-bold">${first.toUpperCase()}</span> <span class="brand-light">${rest.toUpperCase()}</span>`;
    });
    
    // Update footer copyrights
    document.querySelectorAll('.footer-copy, .index-footer-copy, .footer-bottom .footer-copy, .mini-footer-copy').forEach(copy => {
      copy.innerHTML = `© 2026 ${profile.name} · All rights reserved<br>
        <span style="font-size: 0.85em; display: block; margin-top: 0.5rem; color: var(--gray);">Developed & Maintained by <a href="https://www.linkedin.com/in/soutrik-chowdhury?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener" class="footer-credit-link" style="color: inherit; border-bottom: 1px dotted var(--gray); padding-bottom: 1px; transition: color 0.25s;">Soutrik Chowdhury</a> and ${profile.name}</span>
        <a href="admin.html" class="footer-admin-link" style="opacity: 0.4; transition: opacity 0.2s; text-decoration: none; font-size: 11.5px; letter-spacing: 0.05em; display: inline-block; margin-top: 5px;">CMS Dashboard</a>`;
    });

    // Replace Luminary/Luminar with Krishnendu Goswami in texts, footers and loaders
    document.querySelectorAll('.loader-logo, .nav-logo, .footer-brand .nav-logo, title, h2').forEach(el => {
      if (el.textContent.includes('Luminary') || el.textContent.includes('Luminar')) {
        if (el.classList.contains('nav-logo')) {
          el.innerHTML = `<img src="logo.png" alt="KG Logo" style="height: 24px; width: auto; object-fit: contain; margin-right: 8px;"> Krishnendu Goswami`;
          el.style.display = 'inline-flex';
          el.style.alignItems = 'center';
          el.style.textTransform = 'none';
        } else {
          el.innerHTML = el.innerHTML.replace(/Luminary/g, 'Krishnendu Goswami').replace(/Luminar/g, 'Krishnendu Goswami');
        }
      }
    });

    // Setup Legal Modal Click Listeners dynamically
    setupLegalModals();

    // Update social link URLs dynamically based on aria-label
    document.querySelectorAll('.social-link').forEach(link => {
      const label = link.getAttribute('aria-label') || '';
      if (label.toLowerCase().includes('instagram')) {
        link.href = profile.instagram || '#';
      } else if (label.toLowerCase().includes('twitter') || label.toLowerCase().includes('x (twitter)')) {
        link.href = profile.twitter || '#';
      }
    });

    // Update contact details dynamically based on label matching
    document.querySelectorAll('.contact-detail').forEach(detail => {
      const labelEl = detail.querySelector('.contact-detail-label');
      const valEl = detail.querySelector('.contact-detail-value');
      if (labelEl && valEl) {
        const label = labelEl.textContent.trim().toLowerCase();
        if (label === 'email') {
          valEl.innerHTML = `<a href="mailto:${profile.email}" class="contact-email">${profile.email}</a>`;
        } else if (label === 'base location') {
          valEl.textContent = profile.location;
        }
      }
    });

    if (window.siteData.galleryCategories) {
      const cats = window.siteData.categoriesOrder || Object.keys(window.siteData.galleryCategories);
      
      const dropdownMenu = document.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.innerHTML = cats.map(key => {
          const cat = window.siteData.galleryCategories[key];
          return `<li><a href="gallery.html?category=${key}">${cat.title}${cat.em}</a></li>`;
        }).join('');
      }
      
      const mobileDropdownMenu = document.querySelector('.mobile-dropdown-menu');
      if (mobileDropdownMenu) {
        mobileDropdownMenu.innerHTML = cats.map(key => {
          const cat = window.siteData.galleryCategories[key];
          return `<a href="gallery.html?category=${key}" role="menuitem">${cat.title}${cat.em}</a>`;
        }).join('');
      }

      // Rename "Selected Works" triggers to "Genre"
      document.querySelectorAll('.dropdown-trigger').forEach(el => {
        if (el.textContent.trim() === 'Selected Works') {
          el.textContent = 'Genre';
        }
      });
      document.querySelectorAll('#mobile-menu span').forEach(el => {
        if (el.textContent.trim() === 'Selected Works') {
          el.textContent = 'Genre';
        }
      });
    }
  }
}

/* ── LEGAL MODALS CREATOR & BINDINGS ── */
function setupLegalModals() {
  // If modals don't exist yet, inject them into body
  if (!document.getElementById('privacy-modal')) {
    const modalHtml = `
      <div id="privacy-modal" class="legal-modal" role="dialog" aria-modal="true" aria-labelledby="pm-title">
        <div class="legal-modal-card">
          <div class="legal-modal-header">
            <h2 id="pm-title" class="legal-modal-title">Privacy Policy</h2>
            <button class="legal-modal-close" onclick="closeLegalModal('privacy-modal')" aria-label="Close modal">
              <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="legal-modal-body">
            <h3>1. Information Collection</h3>
            <p>We respect your privacy. This portfolio is primarily a visual gallery. We only collect personal identifier details when you explicitly use the Contact form to send messages or enquire about prints/licensing. We do not sell or share your data.</p>
            <h3>2. Cookies &amp; Data</h3>
            <p>Our website utilizes minimal local storage solely to remember your custom display preference settings (such as dark or light theme) and to save your dashboard workspace state. No third-party marketing or tracking cookies are employed.</p>
            <h3>3. Third-Party Services &amp; Security</h3>
            <p>We leverage secure cloud infrastructure (Supabase) to safely store message logs. They act strictly as a data processor. Your data is encrypted and maintained with high security standards.</p>
          </div>
        </div>
      </div>

      <div id="terms-modal" class="legal-modal" role="dialog" aria-modal="true" aria-labelledby="tm-title">
        <div class="legal-modal-card">
          <div class="legal-modal-header">
            <h2 id="tm-title" class="legal-modal-title">Terms of Use</h2>
            <button class="legal-modal-close" onclick="closeLegalModal('terms-modal')" aria-label="Close modal">
              <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="legal-modal-body">
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing and browsing this portfolio, you signify your agreement to comply with and be bound by these Terms of Use and all applicable laws and regulations.</p>
            <h3>2. Permitted Use &amp; Restrictions</h3>
            <p>You may view the high-resolution photographic archive solely for personal, non-commercial inspiration. Hotlinking images directly, scraping content, downloading images, or running automated extractors on this archive is strictly forbidden and actively monitored.</p>
            <h3>3. Disclaimer</h3>
            <p>All materials are presented on an "as is" baseline without express warranty. We reserve rights to modify categories, galleries, or layout presentation structures without advance notification.</p>
          </div>
        </div>
      </div>

      <div id="copyright-modal" class="legal-modal" role="dialog" aria-modal="true" aria-labelledby="cm-title">
        <div class="legal-modal-card">
          <div class="legal-modal-header">
            <h2 id="cm-title" class="legal-modal-title">Copyright Notice</h2>
            <button class="legal-modal-close" onclick="closeLegalModal('copyright-modal')" aria-label="Close modal">
              <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="legal-modal-body">
            <h3>1. Ownership</h3>
            <p>All photographic works, imagery, design layouts, logos, and written notes published on this site are the exclusive intellectual property of Krishnendu Goswami unless explicitly noted otherwise.</p>
            <h3>2. Protection Laws</h3>
            <p>This work is fully protected under Indian and international copyright treaties. Absolutely no image or portion of code may be downloaded, reproduced, copied, projected, or utilized in any manner without formal written authorization.</p>
            <h3>3. Infringement Actions</h3>
            <p>Unauthorized usage of any image, including unauthorized social media re-uploads or editorial publication, constitutes copyright infringement and will result in immediate legal claim actions.</p>
          </div>
        </div>
      </div>

      <div id="licensing-modal" class="legal-modal" role="dialog" aria-modal="true" aria-labelledby="lm-title">
        <div class="legal-modal-card">
          <div class="legal-modal-header">
            <h2 id="lm-title" class="legal-modal-title">Licensing Guidelines</h2>
            <button class="legal-modal-close" onclick="closeLegalModal('licensing-modal')" aria-label="Close modal">
              <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div class="legal-modal-body">
            <h3>1. Commercial &amp; Editorial Licenses</h3>
            <p>Our entire high-resolution catalog is available for commercial print, digital publishing, advertising campaigns, and natural history editorial assignments.</p>
            <h3>2. Licensing Formats</h3>
            <p>Licenses are custom-tailored on a Rights-Managed (RM) model, calculated based on target media, distribution region, runtime duration, and scale of visibility. Royalty-Free formats are not available.</p>
            <h3>3. How to Enquire</h3>
            <p>For all licensing requests, please utilize our <a href="contact.html?enquiry=licensing" style="color: var(--gold); text-decoration: underline;">Contact Form</a> indicating image title, target usage platform, publication scale, and scheduling details.</p>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Close modal when clicking backdrop
    document.querySelectorAll('.legal-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
        }
      });
    });
  }

  // Intercept all footer legal links to trigger modals instead of navigating
  document.querySelectorAll('a').forEach(link => {
    const txt = link.textContent.trim().toLowerCase();
    if (txt === 'privacy policy' || txt === 'privacy') {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        openLegalModal('privacy-modal');
      });
    } else if (txt === 'terms of use' || txt === 'terms') {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        openLegalModal('terms-modal');
      });
    } else if (txt === 'copyright') {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        openLegalModal('copyright-modal');
      });
    } else if (txt === 'licensing') {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        openLegalModal('licensing-modal');
      });
    }
  });
}

function openLegalModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeLegalModal(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.remove('open');
    document.body.style.overflow = '';
  }
}

window.openLegalModal = openLegalModal;
window.closeLegalModal = closeLegalModal;

document.addEventListener('DOMContentLoaded', updateDynamicLayout);
document.addEventListener('siteDataLoaded', updateDynamicLayout);

/* ── UNIVERSAL MOBILE TOUCH SWIPE SUPPORT FOR LIGHTBOX ── */
(function setupUniversalTouchSwipe() {
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', e => {
    const lbEl = document.getElementById('lb') || document.getElementById('lightbox');
    if (!lbEl || !lbEl.classList.contains('open')) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    const lbEl = document.getElementById('lb') || document.getElementById('lightbox');
    if (!lbEl || !lbEl.classList.contains('open')) return;
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;

    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Horizontally dominant swipe
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        if (typeof window.lbNav === 'function') window.lbNav(1);
      } else {
        if (typeof window.lbNav === 'function') window.lbNav(-1);
      }
    }
  }, { passive: true });
})();

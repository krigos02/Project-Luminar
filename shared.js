/* ── THEME TOGGLE ── */
const THEME_STORAGE_KEY = 'luminary-theme';

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

/* ── PAGE LOADER ── */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1000);
  }
});

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
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
    });
    
    function animRing() {
      rx += (cx - rx) * 0.12;
      ry += (cy - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
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

/* ── SCROLL REVEAL ── */
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
      const parts = profile.name.split(' ');
      const first = parts[0] || '';
      const rest = parts.slice(1).join(' ') || '';
      logo.innerHTML = `<span class="brand-bold">${first.toUpperCase()}</span> <span class="brand-light">${rest.toUpperCase()}</span>`;
    });
    
    // Update footer copyrights
    document.querySelectorAll('.footer-copy, .index-footer-copy, .footer-bottom .footer-copy').forEach(copy => {
      copy.innerHTML = `© 2025 ${profile.name} · All rights reserved · <a href="admin.html" class="footer-admin-link" style="opacity: 0.4; transition: opacity 0.2s; text-decoration: none; font-size: 11.5px; letter-spacing: 0.05em; display: inline-block; margin-left: 10px;">CMS Dashboard</a>`;
    });

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

    // Update dropdown menus based on galleryCategories & rename Selected Works to Genre
    if (window.siteData.galleryCategories) {
      const cats = Object.keys(window.siteData.galleryCategories);
      
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
document.addEventListener('DOMContentLoaded', updateDynamicLayout);
document.addEventListener('siteDataLoaded', updateDynamicLayout);

/* ─── carousel3d.js ───────────────────────────────────────────────────────
   Drop-in 3D coverflow carousel for Luminar / index.html
   Reads from window.siteData.homepagePhotos (same shape as masonry).
   Replaces renderHomepageGallery() — call initCarousel3D() instead,
   or it auto-inits on DOMContentLoaded + siteDataLoaded.
   ───────────────────────────────────────────────────────────────────────── */

(function () {
  /* ── inject styles once ── */
  const STYLE_ID = 'carousel3d-styles';
  if (!document.getElementById(STYLE_ID)) {
    const s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = `
/* ── 3D Carousel wrapper ─────────────────────────── */
.c3d-section {
  width: 100%;
  padding: 0;
  overflow: hidden;
}

/* Stage */
.c3d-stage-outer {
  position: relative;
  width: 100%;
  height: clamp(340px, 54vw, 600px);
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1100px;
  perspective-origin: 50% 48%;
  overflow: hidden;
}

/* Each card */
.c3d-card {
  position: absolute;
  width: clamp(220px, 34vw, 400px);
  height: clamp(280px, 43vw, 510px);
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  will-change: transform, filter, opacity;
  transition:
    transform  0.62s cubic-bezier(.34, 1.28, .64, 1),
    opacity    0.55s ease,
    filter     0.55s ease;
  box-shadow: 0 12px 60px rgba(0,0,0,.55);
  border: 1px solid rgba(255,255,255,0.06);
  background: var(--bg2, #141414);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.c3d-card img {
  width: 100%;
  height: 72%;
  object-fit: cover;
  display: block;
  pointer-events: none;
  transition: transform 0.6s ease;
}
.c3d-card.pos-center img { transform: scale(1.02); }

.c3d-card-info {
  padding: 14px 18px 18px;
  height: 28%;
  border-top: 1px solid rgba(255,255,255,0.07);
  background: var(--bg2, #141414);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}
.c3d-card-info .c3d-title {
  font-family: var(--font-serif, 'Spectral', Georgia, serif);
  font-size: clamp(13px, 1.5vw, 16px);
  font-weight: 400;
  color: var(--text1, #f0ece4);
  letter-spacing: 0.01em;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.c3d-card-info .c3d-meta {
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 11px;
  color: var(--text3, #888);
  letter-spacing: 0.07em;
  text-transform: uppercase;
  margin: 0;
}

/* Card positions */
.c3d-card.pos-center {
  transform: translateX(0) translateZ(0) scale(1) rotateY(0deg);
  opacity: 1;
  filter: blur(0px) brightness(1);
  z-index: 10;
  pointer-events: auto;
}
.c3d-card.pos-right1 {
  transform: translateX(74%) translateZ(-80px) scale(0.74) rotateY(-17deg);
  opacity: 0.55;
  filter: blur(5px) brightness(0.65);
  z-index: 6;
  pointer-events: auto;
}
.c3d-card.pos-right2 {
  transform: translateX(128%) translateZ(-180px) scale(0.56) rotateY(-26deg);
  opacity: 0.28;
  filter: blur(11px) brightness(0.45);
  z-index: 3;
  pointer-events: auto;
}
.c3d-card.pos-left1 {
  transform: translateX(-74%) translateZ(-80px) scale(0.74) rotateY(17deg);
  opacity: 0.55;
  filter: blur(5px) brightness(0.65);
  z-index: 6;
  pointer-events: auto;
}
.c3d-card.pos-left2 {
  transform: translateX(-128%) translateZ(-180px) scale(0.56) rotateY(26deg);
  opacity: 0.28;
  filter: blur(11px) brightness(0.45);
  z-index: 3;
  pointer-events: auto;
}
.c3d-card.pos-hidden {
  opacity: 0;
  pointer-events: none;
  z-index: 0;
  transform: translateX(160%) translateZ(-300px) scale(0.4);
  filter: blur(18px);
  transition: none;
}

/* ── LIGHT THEME overrides ── */
[data-theme="light"] .c3d-card {
  box-shadow: 0 8px 40px rgba(0,0,0,.14);
  border-color: rgba(0,0,0,0.07);
  background: var(--bg2, #fafafa);
}
[data-theme="light"] .c3d-card-info {
  background: var(--bg2, #fafafa);
  border-top-color: rgba(0,0,0,0.08);
}
[data-theme="light"] .c3d-card.pos-right1,
[data-theme="light"] .c3d-card.pos-left1  { filter: blur(5px) brightness(0.88); }
[data-theme="light"] .c3d-card.pos-right2,
[data-theme="light"] .c3d-card.pos-left2  { filter: blur(11px) brightness(0.78); }

/* ── Nav arrows ── */
.c3d-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border, rgba(255,255,255,0.12));
  background: var(--bg2, rgba(20,20,20,0.8));
  color: var(--text2, #c8c2b6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s, border-color 0.18s, transform 0.18s;
}
.c3d-nav:hover {
  background: var(--bg3, rgba(40,40,40,0.95));
  border-color: var(--gold, #c8a96e);
  color: var(--gold, #c8a96e);
  transform: translateY(-50%) scale(1.08);
}
.c3d-nav:active { transform: translateY(-50%) scale(0.95); }
.c3d-nav svg { width: 18px; height: 18px; stroke: currentColor; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.c3d-prev { left: clamp(6px, 2vw, 24px); }
.c3d-next { right: clamp(6px, 2vw, 24px); }

/* ── Dot indicators ── */
.c3d-dots {
  display: flex;
  gap: 7px;
  justify-content: center;
  margin: 1.4rem 0 0.5rem;
  padding: 0;
  list-style: none;
}
.c3d-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: var(--border, rgba(255,255,255,0.18));
  cursor: pointer;
  transition: all 0.28s ease;
}
.c3d-dot.active {
  width: 20px;
  border-radius: 3px;
  background: var(--gold, #c8a96e);
}

/* ── Drag hint ── */
.c3d-hint {
  text-align: center;
  font-family: var(--font-sans, 'Inter', sans-serif);
  font-size: 11px;
  letter-spacing: 0.09em;
  color: var(--text3, #666);
  margin-bottom: 2.5rem;
}

/* ── Coming soon fallback ── */
.c3d-empty {
  text-align: center;
  padding: 7rem 2rem;
  border: 1px dashed var(--border);
  border-radius: 2px;
  margin: 2rem 0;
}

/* ── Mobile adjustments ── */
@media (max-width: 640px) {
  .c3d-card.pos-right2,
  .c3d-card.pos-left2 {
    opacity: 0;
    pointer-events: none;
  }
  .c3d-nav { width: 36px; height: 36px; }
  .c3d-nav svg { width: 15px; height: 15px; }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .c3d-card { transition: none !important; }
}
    `;
    document.head.appendChild(s);
  }

  /* ─────────────────────────────────────────────────────────── */

  let state = {
    photos: [],
    filtered: [],
    idx: 0,
    dragging: false,
    dragStartX: 0,
    dragDelta: 0,
  };
  const DRAG_THR = 55;

  /* ── pos class ── */
  function posClass(i) {
    const len = state.filtered.length;
    if (len === 0) return 'pos-hidden';
    let rel = ((i - state.idx) % len + len) % len;
    if (rel > len / 2) rel -= len;
    if (rel === 0) return 'pos-center';
    if (rel === 1 || (len === 2 && rel === -1)) return 'pos-right1';
    if (rel === 2) return 'pos-right2';
    if (rel === -1) return 'pos-left1';
    if (rel === -2) return 'pos-left2';
    return 'pos-hidden';
  }

  /* ── build DOM ── */
  function buildCarousel() {
    const photos = state.filtered;
    const container = document.getElementById('masonry');
    if (!container) return;

    /* Wrap the existing #featured container logic */
    const section = container.closest('section') || container.parentElement;

    /* ── empty state ── */
    if (photos.length === 0) {
      container.innerHTML = `
        <div class="c3d-empty" style="column-span:all;grid-column:1/-1;">
          <div style="font-family:var(--font-sans);font-size:11px;font-weight:500;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);margin-bottom:1.5rem;">C o m i n g &nbsp; S o o n</div>
          <p style="font-family:var(--font-serif);font-size:1.25rem;font-style:italic;color:var(--text2);max-width:480px;line-height:1.7;margin:0;font-weight:300;">"A collection of light, shadow, and patience."</p>
        </div>`;
      updateCount(0);
      return;
    }

    /* ── build carousel HTML ── */
    const stageId = 'c3d-stage';
    const dotsId  = 'c3d-dots';

    container.innerHTML = `
      <div class="c3d-section">
        <div class="c3d-stage-outer" id="${stageId}">
          <button class="c3d-nav c3d-prev" id="c3d-prev" aria-label="Previous photo">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          ${photos.map((p, i) => `
            <div class="c3d-card ${posClass(i)}" data-ci="${i}" tabindex="0" role="button" aria-label="${p.title}">
              <img src="${p.src || ''}" alt="${p.title}" loading="lazy" onerror="this.style.background='var(--bg3)'">
              <div class="c3d-card-info">
                <p class="c3d-title">${p.title}</p>
                <p class="c3d-meta">${p.cat || ''}</p>
              </div>
            </div>
          `).join('')}
          <button class="c3d-nav c3d-next" id="c3d-next" aria-label="Next photo">
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
        <ul class="c3d-dots" id="${dotsId}" aria-label="Carousel position">
          ${photos.map((_, i) => `<li><button class="c3d-dot${i === state.idx ? ' active' : ''}" data-di="${i}" aria-label="Go to photo ${i + 1}"></button></li>`).join('')}
        </ul>
        <p class="c3d-hint">← drag or use arrows to explore →</p>
      </div>
    `;

    updateCount(photos.length);
    bindEvents();
  }

  /* ── update positions without rebuilding DOM ── */
  function updatePositions() {
    document.querySelectorAll('.c3d-card').forEach(el => {
      const i = parseInt(el.dataset.ci, 10);
      el.className = 'c3d-card ' + posClass(i);
    });
    document.querySelectorAll('.c3d-dot').forEach(el => {
      const i = parseInt(el.dataset.di, 10);
      el.classList.toggle('active', i === state.idx);
    });
  }

  function go(dir) {
    const len = state.filtered.length;
    if (len === 0) return;
    state.idx = ((state.idx + dir) % len + len) % len;
    updatePositions();
  }

  /* ── count label ── */
  function updateCount(n) {
    const el = document.getElementById('count-label');
    if (el) el.textContent = `Showing ${n} photograph${n !== 1 ? 's' : ''}`;
  }

  /* ── bind all events ── */
  function bindEvents() {
    /* arrows */
    document.getElementById('c3d-prev')?.addEventListener('click', () => go(-1));
    document.getElementById('c3d-next')?.addEventListener('click', () => go(1));

    /* dots */
    document.querySelectorAll('.c3d-dot').forEach(btn => {
      btn.addEventListener('click', () => {
        state.idx = parseInt(btn.dataset.di, 10);
        updatePositions();
      });
    });

    /* card click → open lightbox if center, else advance */
    document.querySelectorAll('.c3d-card').forEach(card => {
      card.addEventListener('click', () => {
        if (state.dragging) return;
        const i = parseInt(card.dataset.ci, 10);
        if (i === state.idx) {
          if (typeof openLb === 'function') openLb(i);
        } else {
          state.idx = i;
          updatePositions();
        }
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
      });
    });

    /* keyboard */
    document.addEventListener('keydown', e => {
      const lb = document.getElementById('lb');
      if (lb && lb.classList.contains('open')) return;
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft')  go(-1);
    });

    /* drag / swipe / trackpad */
    const stage = document.getElementById('c3d-stage');
    if (!stage) return;

    let isDown = false;
    let wheelDebounce = false;

    // Trackpad / Mouse Wheel gesture support
    stage.addEventListener('wheel', (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) > 15) {
        e.preventDefault();
        if (!wheelDebounce) {
          wheelDebounce = true;
          go(delta > 0 ? 1 : -1);
          setTimeout(() => { wheelDebounce = false; }, 300);
        }
      }
    }, { passive: false });

    // Global drag tracking (MouseDown on stage, Move/Up on window)
    stage.addEventListener('mousedown', e => {
      isDown = true;
      state.dragging = false;
      state.dragStartX = e.clientX;
    });

    window.addEventListener('mousemove', e => {
      if (!isDown) return;
      state.dragDelta = e.clientX - state.dragStartX;
      if (Math.abs(state.dragDelta) > 8) {
        state.dragging = true;
      }
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        if (state.dragging) {
          if (state.dragDelta < -DRAG_THR) go(1);
          else if (state.dragDelta > DRAG_THR) go(-1);
        }
        isDown = false;
        state.dragging = false;
        state.dragDelta = 0;
      }
    });

    // Touch Support
    stage.addEventListener('touchstart', e => {
      state.dragStartX = e.touches[0].clientX;
      state.dragging = false;
    }, { passive: true });

    stage.addEventListener('touchmove', e => {
      state.dragDelta = e.touches[0].clientX - state.dragStartX;
      if (Math.abs(state.dragDelta) > 8) {
        state.dragging = true;
      }
    }, { passive: true });

    stage.addEventListener('touchend', () => {
      if (state.dragging) {
        if (state.dragDelta < -DRAG_THR) go(1);
        else if (state.dragDelta > DRAG_THR) go(-1);
      }
      state.dragging = false;
      state.dragDelta = 0;
    });

  }

  /* ── public: filter (called by existing filterPhotos) ── */
  window.carousel3DFilter = function (filterTag) {
    window._c3dFiltered = state.filtered;
    
    if (filterTag === 'all') {
      state.filtered = [...state.photos];
    } else {
      const tagLower = filterTag.toLowerCase().trim();
      state.filtered = state.photos.filter(p => {
        const photoTags = p.tag ? p.tag.split(',').map(t => t.trim().toLowerCase()) : [];
        const matchesTag = photoTags.includes(tagLower);
        const matchesCategory = p.cat && p.cat.toLowerCase() === tagLower;
        return matchesTag || matchesCategory;
      });
    }
    
    window._c3dFiltered = state.filtered;
    state.idx = 0;
    buildCarousel();
  };

  /* ── public: init ── */
  window.initCarousel3D = function () {
    if (!window.siteData) return;
    let all = [];
    if (window.siteData.galleryCategories) {
      Object.keys(window.siteData.galleryCategories).forEach(catKey => {
        const cat = window.siteData.galleryCategories[catKey];
        if (cat && Array.isArray(cat.photos)) {
          cat.photos.forEach(p => {
            all.push({
              ...p,
              cat: catKey
            });
          });
        }
      });
    }
    state.photos   = all;
    state.filtered = [...state.photos];
    window._c3dFiltered = state.filtered;
    state.idx      = 0;
    buildCarousel();
  };

  /* ── auto-init ── */
  document.addEventListener('DOMContentLoaded',  window.initCarousel3D);
  document.addEventListener('siteDataLoaded',    window.initCarousel3D);

})();

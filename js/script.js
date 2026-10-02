// Justin Bates — Portfolio: mobile nav, project galleries, lightbox.
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Gallery: thumbnails swap the main image + caption; blurred backdrop fills the frame
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const main = gallery.querySelector('.gallery-main img');
    const backdrop = gallery.querySelector('.gallery-main .backdrop');
    const caption = gallery.querySelector('.gallery-caption');
    const thumbs = gallery.querySelectorAll('.gallery-thumb');
    const setBackdrop = (src) => { if (backdrop) backdrop.style.backgroundImage = `url("${src}")`; };
    setBackdrop(main.getAttribute('src'));
    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        if (thumb.classList.contains('is-active')) return;
        thumbs.forEach((t) => { t.classList.remove('is-active'); t.setAttribute('aria-pressed', 'false'); });
        thumb.classList.add('is-active');
        thumb.setAttribute('aria-pressed', 'true');
        main.classList.add('is-swapping');
        setTimeout(() => {
          main.src = thumb.dataset.src;
          main.alt = thumb.dataset.alt || '';
          setBackdrop(thumb.dataset.src);
          if (caption) caption.textContent = thumb.dataset.caption || '';
          main.classList.remove('is-swapping');
        }, 160);
      });
    });
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const img = lightbox.querySelector('img');
    document.querySelectorAll('.gallery-main').forEach((frame) => {
      frame.addEventListener('click', () => {
        const src = frame.querySelector('img');
        img.src = src.src; img.alt = src.alt;
        lightbox.classList.add('open');
      });
    });
    const close = () => lightbox.classList.remove('open');
    lightbox.addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }
});

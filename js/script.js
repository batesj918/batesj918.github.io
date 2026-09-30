// Justin F. Bates — Portfolio site behavior
// Mobile nav toggle, active-link highlighting on scroll, and reveal-on-scroll animation.

document.addEventListener('DOMContentLoaded', () => {

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu after a link is tapped (mobile)
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight active nav link based on scroll position
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-link');

  const highlightNav = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navAnchors.forEach((anchor) => {
      anchor.classList.toggle('active', anchor.getAttribute('href') === `#${currentId}`);
    });
  };

  window.addEventListener('scroll', highlightNav);
  highlightNav();

  // Reveal-on-scroll animation
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: just show everything
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

});

// Project galleries: thumbnail click swaps the main shot, URL bar and caption.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const main = gallery.querySelector('.gallery-main img');
    const url = gallery.querySelector('.gallery-main .browser-url');
    const caption = gallery.querySelector('.gallery-caption');
    const thumbs = gallery.querySelectorAll('.gallery-thumb');

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
          if (url && thumb.dataset.url) url.textContent = thumb.dataset.url;
          if (caption) caption.textContent = thumb.dataset.caption || '';
          main.classList.remove('is-swapping');
        }, 180);
      });
    });
  });

  // Lightbox for gallery main shots
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  if (lightbox && lightboxImg) {
    document.querySelectorAll('.gallery-main img').forEach((img) => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
      });
    });
    const close = () => lightbox.classList.remove('open');
    lightbox.addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }
});

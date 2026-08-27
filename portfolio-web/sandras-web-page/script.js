// ============================================================
// INTRO SEQUENCE
// Order: connector lines draw in -> hexagons pop in (web, sys, sec)
// -> eyebrow fades in -> name assembles letter by letter
// -> tagline settles -> scroll hint appears
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Just render the name as plain text and skip all staging.
    const nameEl = document.getElementById('name-target');
    nameEl.textContent = nameEl.dataset.text;
    return;
  }

  // ---- 1. Build the letters of the name as individual spans ----
  const nameEl = document.getElementById('name-target');
  const text = nameEl.dataset.text || '';
  nameEl.innerHTML = '';
  const letterEls = [...text].map((ch) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    nameEl.appendChild(span);
    return span;
  });

  // ---- 2. Timeline ----
  const lines = document.querySelectorAll('.conn-path');
  const hexes = [
    document.querySelector('.hex-web .hex'),
    document.querySelector('.hex-sys .hex'),
    document.querySelector('.hex-sec .hex'),
  ];
  const eyebrow = document.getElementById('eyebrow');
  const tagline = document.getElementById('tagline');
  const scrollHint = document.getElementById('scroll-hint');

  const runTimeline = () => {
    // Lines draw in immediately
    lines.forEach((l) => l.classList.add('drawn'));

    // Hexagons pop in, staggered
    hexes.forEach((hex, i) => {
      setTimeout(() => hex.classList.add('pop-in'), 350 + i * 180);
    });

    // Eyebrow
    setTimeout(() => eyebrow.classList.add('in'), 950);

    // Letters, staggered
    const letterStart = 1150;
    letterEls.forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), letterStart + i * 55);
    });

    // Tagline, after letters finish
    const taglineDelay = letterStart + letterEls.length * 55 + 150;
    setTimeout(() => tagline.classList.add('in'), taglineDelay);

    // Scroll hint, last
    setTimeout(() => scrollHint.classList.add('in'), taglineDelay + 350);
  };

  runTimeline();
});

// ============================================================
// SCROLL-TRIGGERED REVEALS (SYS section terminal, header, etc.)
// ============================================================

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll('.sys-header, .terminal').forEach((el) => {
  scrollObserver.observe(el);
});

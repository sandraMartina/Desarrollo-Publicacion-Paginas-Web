/* =====================================================================
   SANDRA'S NEWS — FOLDER SCROLL-REVEAL EFFECT
   As the user scrolls through #folderHero, the two image "flaps"
   rotate open like a folder, revealing the page content underneath.
   ===================================================================== */

(function () {
    const hero = document.getElementById('folderHero');
    if (!hero) return; // page doesn't have the folder intro, skip safely

    const flapTop = document.getElementById('flapTop');
    const flapBottom = document.getElementById('flapBottom');
    const title = document.getElementById('folderTitle');

    const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function updateFolder() {
        const rect = hero.getBoundingClientRect();
        const scrollableDistance = rect.height - window.innerHeight;

        // progress: 0 = top of page, 1 = folder fully open
        const progress = clamp(-rect.top / scrollableDistance, 0, 1);

        const angle = progress * 110; // degrees the flap rotates open
        flapTop.style.transform = `rotateX(${-angle}deg)`;
        flapBottom.style.transform = `rotateX(${angle}deg)`;

        title.style.opacity = 1 - clamp(progress * 2, 0, 1);
        title.style.transform = `scale(${1 - progress * 0.1})`;

        // once fully open, let scroll/clicks pass through to content below
        hero.style.zIndex = progress >= 0.999 ? -1 : 1;
    }

    if (prefersReducedMotion) {
        // CSS handles the static fallback layout; nothing to animate
        return;
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateFolder();
                ticking = false;
            });
            ticking = true;
        }
    });

    updateFolder(); // run once on load
})();

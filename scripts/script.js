console.log("App script loaded");

// GSAP animations (run after DOM ready)
function initAnimations() {
  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".title", { opacity: 0, y: 50, duration: 1 });
  gsap.utils.toArray(".fade-text").forEach((elem) => {
    gsap.fromTo(
      elem,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: elem, start: "top 80%", toggleActions: "play none none none" },
      }
    );
  });
}

// Bind header scroll/hamburger once header exists
function bindHeaderInteractions() {
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!header || !hamburger || !navLinks) return false;

  let prevY = window.pageYOffset;
  const onScroll = () => {
    const y = window.pageYOffset;
    header.style.top = (prevY > y) ? '0' : '-80px';
    prevY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  const body = document.body;
  const links = navLinks.querySelectorAll('a');
  const closeMenu = () => { navLinks.classList.remove('active'); hamburger.classList.remove('open'); body.classList.remove('no-scroll'); hamburger.setAttribute('aria-expanded', 'false'); };
  const openMenu  = () => { navLinks.classList.add('active');    hamburger.classList.add('open');    body.classList.add('no-scroll');    hamburger.setAttribute('aria-expanded', 'true'); };
  hamburger.addEventListener('click', () => (navLinks.classList.contains('active') ? closeMenu() : openMenu()));
  links.forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 768) closeMenu(); });
  return true;
}

function initHeaderWhenReady() {
  if (bindHeaderInteractions()) return;
  // If using custom elements, wait for upgrade then bind
  if (window.customElements && customElements.whenDefined) {
    customElements.whenDefined('main-header').then(() => {
      requestAnimationFrame(() => bindHeaderInteractions());
    }).catch(() => {});
  }
  // Fallback: observe DOM for header insertion
  const obs = new MutationObserver(() => { if (bindHeaderInteractions()) obs.disconnect(); });
  obs.observe(document.body, { childList: true, subtree: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initHeaderWhenReady();
});


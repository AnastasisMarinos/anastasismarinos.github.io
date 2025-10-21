console.log("GSAP script loaded"); // ✅ Confirm script runs

gsap.registerPlugin(ScrollTrigger);

// Animate title immediately on page load
gsap.from(".title", {
  opacity: 0,
  y: 50,
  duration: 1,
});

// Animate fade-text elements on scroll
gsap.utils.toArray(".fade-text").forEach((elem) => {
  console.log("Animating:", elem); // ✅ Check if these elements are found
  gsap.fromTo(
    elem,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
});

var prevScrollpos = window.pageYOffset;
var header = document.querySelector(".header"); // safer than getElementById
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (!header) return; // safeguard
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

// Hamburger menu toggle
(() => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  const body = document.body;
  const links = navLinks.querySelectorAll('a');

  const closeMenu = () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
    body.classList.remove('no-scroll');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    navLinks.classList.add('active');
    hamburger.classList.add('open');
    body.classList.add('no-scroll');
    hamburger.setAttribute('aria-expanded', 'true');
  };

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on navigation
  links.forEach((a) => a.addEventListener('click', closeMenu));

  // Reset on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
})();

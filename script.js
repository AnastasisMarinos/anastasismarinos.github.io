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
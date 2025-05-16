gsap.registerPlugin(ScrollTrigger);

// Animate title immediately on page load
gsap.from(".title", {
  opacity: 0,
  y: 50,
  duration: 1,
});

// Animate paragraphs with .fade-text on scroll
gsap.utils.toArray(".fade-text").forEach((elem) => {
  gsap.fromTo(elem, 
    { opacity: 0, y: 20 }, 
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    }
  );
});

document.addEventListener('DOMContentLoaded', () => {
  // Screenshot carousel for project page
  const wrap = document.querySelector('.project-page .screenshots-wrap');
  const carousel = wrap?.querySelector('.screenshots-carousel');
  if (carousel && wrap) {
    const slides = Array.from(carousel.querySelectorAll('.slide'));
    const prevBtn = wrap.querySelector('.carousel-btn.prev');
    const nextBtn = wrap.querySelector('.carousel-btn.next');
    let index = slides.findIndex(s => s.classList.contains('active'));
    if (index < 0) index = 0;

    function show(newIndex) {
      slides[index]?.classList.remove('active');
      index = (newIndex + slides.length) % slides.length;
      slides[index]?.classList.add('active');
    }

    prevBtn?.addEventListener('click', (e) => { e.stopPropagation(); show(index - 1); });
    nextBtn?.addEventListener('click', (e) => { e.stopPropagation(); show(index + 1); });

    // Keyboard support when carousel is in view
    document.addEventListener('keydown', (e) => {
      if (!document.body.contains(wrap)) return;
      if (e.key === 'ArrowLeft') show(index - 1);
      else if (e.key === 'ArrowRight') show(index + 1);
    });

    // Click image to go to next
    carousel.addEventListener('click', () => show(index + 1));
  }
});

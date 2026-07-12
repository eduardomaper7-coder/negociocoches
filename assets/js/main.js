document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
  }

  const thumbs = Array.from(document.querySelectorAll('.thumb'));
  const main = document.getElementById('mainCarImage');
  let currentIndex = 0;
  const showImage = (index) => {
    if (!thumbs.length || !main) return;
    currentIndex = (index + thumbs.length) % thumbs.length;
    main.src = thumbs[currentIndex].dataset.src;
    thumbs.forEach(b => b.classList.remove('active'));
    thumbs[currentIndex].classList.add('active');
  };
  if (thumbs.length && main) {
    showImage(0);
    thumbs.forEach((btn, index) => btn.addEventListener('click', () => showImage(index)));
    const prev = document.querySelector('.gallery-arrow.left');
    const next = document.querySelector('.gallery-arrow.right');
    if (prev) prev.addEventListener('click', () => showImage(currentIndex - 1));
    if (next) next.addEventListener('click', () => showImage(currentIndex + 1));
  }
});

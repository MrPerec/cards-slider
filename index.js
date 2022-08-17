const $slidesElem = document.querySelectorAll('.slide');

function clearActiveClasses() {
  $slidesElem.forEach((slide) => {
    slide.classList.remove('active');
  });
}

$slidesElem.forEach((slide) => {
  slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('active');
  });
});

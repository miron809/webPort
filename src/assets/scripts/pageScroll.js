const navEl = document.querySelectorAll('.page-scroll');

navEl.forEach(el => {
  const anchor = el.dataset.anchor;
  const targetSectionOffset = document.getElementById(anchor).offsetTop;

  el.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: targetSectionOffset,
      behavior: 'smooth'
    });
  })
});

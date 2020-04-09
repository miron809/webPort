const header = document.getElementById('header');

function fixedHeader() {
  window.scrollY > 0 ? header.classList.add('active') : header.classList.remove('active');
}

window.addEventListener('scroll', fixedHeader);

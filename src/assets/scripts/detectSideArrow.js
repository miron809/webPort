const projectEl = document.querySelectorAll('.project-item');
const socialEl = document.querySelectorAll('#social-links a');

function closestEdge(event) {
  const target = event.target;
  const targetBounding = target.getBoundingClientRect();

  const elementTopEdge = targetBounding.top;
  const elementRightEdge = targetBounding.right;
  const elementBottomEdge = targetBounding.bottom;
  const elementLeftEdge = targetBounding.left;

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const topEdgeDist = Math.abs(elementTopEdge - mouseY);
  const rightEdgeDist = Math.abs(elementRightEdge - mouseX);
  const bottomEdgeDist = Math.abs(elementBottomEdge - mouseY);
  const leftEdgeDist = Math.abs(elementLeftEdge - mouseX);

  const min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);

  target.classList.add('active');

  switch (min) {
    case topEdgeDist:
      target.classList.add('top');
      break;
    case rightEdgeDist:
      target.classList.add('right');
      break;
    case bottomEdgeDist:
      target.classList.add('bottom');
      break;
    case leftEdgeDist:
      target.classList.add('left');
  }
}

//project hover listener
projectEl.forEach(element => {
  element.addEventListener('mouseenter', closestEdge);
});
projectEl.forEach(element => {
  element.addEventListener('mouseleave', (e) => e.target.className = 'project-item');
});

//social hover listener
socialEl.forEach(element => {
  element.addEventListener('mouseenter', closestEdge);
});
socialEl.forEach(element => {
  element.addEventListener('mouseleave', (e) => e.target.className = '');
});

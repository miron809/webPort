import Particles from './vendor/particles';

const buttonsArr = document.querySelectorAll('.live-button');
buttonsArr.forEach(button => createAnimation(button));

function createAnimation(button) {
  let particlesOpts = {
    duration: 200,
    easing: 'easeInCubic',
    particlesAmountCoefficient: 10,
    oscillationCoefficient: 80,
    complete: () => {
      animationCompleted();
    }
  };

  const particles = new Particles(button, particlesOpts);
  let buttonVisible = true;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (!particles.isAnimating() && buttonVisible) {
      particles.disintegrate();
      buttonVisible = !buttonVisible;
    }
  });

  function animationCompleted() {
    particles.integrate({
      complete: () => {}
    });
    buttonVisible = !buttonVisible;
    window.open(button.href);
  }
}



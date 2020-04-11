import Particles from './vendor/particles';

const buttonsArr = document.querySelectorAll('.live-button');
buttonsArr.forEach(button => createAnimation(button));

function createAnimation(button) {
  let particlesOpts = {
    direction: 'left',
    size: 5,
    color: '#040e27',
    duration: 500,
    easing: 'easeInCubic',
    particlesAmountCoefficient: 8,
    speed: 0.4,
    oscillationCoefficient: 1,
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
    window.open(button.href);
    particles.integrate({
      duration: 100,
      easing: 'easeOutSine',
      complete: () => {
        return false
      }
    });
    buttonVisible = !buttonVisible;
  }
}



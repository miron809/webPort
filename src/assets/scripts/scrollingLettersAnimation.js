import charming from './vendor/charming.min'

const navigation = document.getElementById('scroll-navigation');
const navigationHeight = document.querySelector('.scroll-navigation li').offsetHeight;
const navigationTop = navigation.offsetTop;
const welcomeSpan = document.querySelector('.welcome');
const firstSectionHeight = document.getElementById('homeSection').offsetHeight;

function titleScrolling() {
  let scrollPosition = window.scrollY;
  //fixing title to header
  if (scrollPosition > navigationTop - 100) {
    navigation.classList.add('fixed');
    welcomeSpan.classList.add('hide-welcome');
  } else {
    navigation.classList.remove('fixed');
    welcomeSpan.classList.remove('hide-welcome');
  }

  //changing title to left position
  if (scrollPosition > firstSectionHeight - 100 - navigationHeight) {
    navigation.classList.add('scrolling');
  } else {
    navigation.classList.remove('scrolling')
  }
}

const sectionArr = document.querySelectorAll("section");
const sections = [];
const titleArr = document.querySelectorAll('.scroll-navigation li h2');
const chars = ['$', '%', '#', '@', '&', '=', '*', '/'];
const charsTotal = chars.length;
let currentSection = document.querySelector(`.scroll-navigation li.active`).getAttribute('data-section');
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//using charming
titleArr.forEach(title => {
  charming(title);
});

//creating section arrList
sectionArr.forEach(item => {
  sections.push(
    {
      'id': item.id,
      'top': item.offsetTop,
      'bottom': item.offsetTop + item.offsetHeight
    }
  )
});

//spy for scroll position - detect the active section
function scrollingSpy() {
  let scrollPosition = window.scrollY;
  for (let section of sections) {
    if (section.top <= scrollPosition && scrollPosition <= section.bottom) {
      setCurrentSection(section.id);
      document.querySelector('.scroll-navigation li.active').classList.remove('active');
      document.querySelector(`[data-section=${section.id}]`).classList.add('active');
    }
  }
}

//set current section and start letters changing
function setCurrentSection(newCurrent) {
  if (newCurrent !== currentSection) {
    lettersChanging(newCurrent);
    currentSection = newCurrent;
  }
}

//letters changing
function lettersChanging(id) {
  const letters = Array.from(document.querySelectorAll(`[data-section=${id}] span`));
  const lettersTotal = letters.length;
  let cnt = 0;

  //save letters from html to data-src & data-initial
  letters.forEach(letter => {
    if (letter.dataset.src) {
      letter.dataset.initial = letter.dataset.src
    } else {
      letter.dataset.src = letter.innerHTML;
      letter.dataset.initial = letter.dataset.src
    }
  });

  //change letters
  letters.forEach((letter, pos) => {
    setTimeout(() => {
      letter.innerHTML = chars[getRandomInt(0, charsTotal - 1)];
      setTimeout(() => {
        letter.innerHTML = letter.dataset.initial;
        ++cnt;
        if (cnt === lettersTotal) {}
      }, 100);
    }, pos * 80);
  });
}


function scrollInit() {
  titleScrolling();
  scrollingSpy();
}

lettersChanging(currentSection);

window.addEventListener('scroll', scrollInit);

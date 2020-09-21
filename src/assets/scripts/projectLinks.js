const projectLinks = {
  projectJs: [
    'assets/static/projects/JS/form-validator/index.html',
    'assets/static/projects/JS/movie-seat-booking/index.html',
    'assets/static/projects/JS/custom-video-player/index.html',
    'assets/static/projects/JS/exchange-rate-calculator/index.html',
    'assets/static/projects/JS/dom-array-methods/index.html',
    'assets/static/projects/JS/menu-slider-modal/index.html',
    'assets/static/projects/JS/hangman-game/index.html',
    'assets/static/projects/JS/meal-finder/index.html',
    'assets/static/projects/JS/expense-tracker/index.html',
    'assets/static/projects/JS/music-player/index.html',
    'assets/static/projects/JS/infinite-scroll/index.html',
    'assets/static/projects/JS/typing-game/index.html',
    'assets/static/projects/JS/speech-text-reader/index.html',
    'assets/static/projects/JS/memory-cards/index.html',
    'assets/static/projects/JS/lyrics-search/index.html',
    'assets/static/projects/JS/relaxer-app/index.html',
    'assets/static/projects/JS/breakout-game/index.html',
    'assets/static/projects/JS/new-year-countdown/index.html',
    'assets/static/projects/JS/sortable-list/index.html',
    'assets/static/projects/JS/speak-number/index.html'
  ],
  projectAngular: [
    'https://ng-fitness-tracker-91abb.web.app/',
    'https://adminator-cba29.web.app/',
    'https://udemy-blog-906e5.web.app/',
    'https://floating-waters-18286.herokuapp.com/'
  ],
  projectHtml: [
    'https://skinali-printcolor.com/',
    'http://forin-markup.uain.su:8008/four_forces/site_name/templates/index.html',
    'https://oboi-printcolor.com/',
    'http://forin-markup.uain.su:8008/residence/name_site/templates/home.html',
    'http://goldis-audit.com.ua/ru/',
    'http://forin-markup.uain.su:8008/whydr/site_name/templates/index.html',
    'assets/static/projects/HTML/a_andronova/index.html',
    'assets/static/projects/HTML/yachting/index.html',
    'assets/static/projects/HTML/intent/site/home.html',
    'assets/static/projects/HTML/consalt/site/home.html',
    'http://forin-markup.uain.su:8008/forin/site_name/templates/index.html'
  ],
  certificates: [
    'https://www.udemy.com/certificate/UC-9db7cac4-e980-4ea6-ae50-57accfdf9e9f/',
    'https://www.udemy.com/certificate/UC-10WZIYF3/',
    'https://www.udemy.com/certificate/UC-380f2e44-2554-4207-8098-50edfe92ba6a/'
  ],
};

const projectSections = document.querySelectorAll('.port-section');

projectSections.forEach( section => {
  const dataAtr = section.dataset.projectlinks;
  const projectItemsLinks = section.querySelectorAll('.project-item a');
  const swiperSlidesLinks = section.querySelectorAll('.swiper-slide a');

  const sectionLinks = projectLinks[dataAtr];

  sectionLinks.forEach( (link, idx) => {
    projectItemsLinks[idx].setAttribute('href', link);
    swiperSlidesLinks[idx].setAttribute('href', link);
    swiperSlidesLinks[idx].setAttribute('target', '_blank')
  })
});

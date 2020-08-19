const projectLinks = {
  projectJs: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
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
    '',
    '',
    '',
    '',
    '',
    'http://forin-markup.uain.su:8008/forin/site_name/templates/index.html'
  ]
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

import * as $ from 'jquery';

let $htmlBody = $('html, body'),
    $pageScrollLink = $('.page-scroll');

/** Page scroll */
$pageScrollLink.on('click', function(e){
  let anchor = $(this),
    target = anchor.attr('href');
  pageScroll(target);
  e.preventDefault();
});

function pageScroll(target){
  $htmlBody.stop().animate({
    scrollTop: $(target).offset().top - (offset - 1)
  }, 1000);
}

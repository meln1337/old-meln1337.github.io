var a = 0;

$('.mobile-menu').on('click', function (e) {
  if (a == 0) {
    a = 1;
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active');
    $('.nav').css('opacity', 1)
  } else {
    $('.nav').css('opacity', 0);
    a = 0;
    $('.menu-btn').toggleClass('menu-active');
  }
})
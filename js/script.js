$(document).ready(function() {
  var fixHeight = function() {
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150
    );
  };
  fixHeight();
  $(window).resize(function() {
    fixHeight();
  });
  $('.navbar .navbar-toggler').on('click', function() {
    fixHeight();
  });
  $('.navbar-toggler, .overlay').on('click', function() {
    $('.mobileMenu, .overlay').toggleClass('open');
  });
});
$(window).scroll(function() {
  $('nav').toggleClass('.scrolled', $(this).scrollTop() > 100);
});
$('.navbar-nav>li>a').on('click', function() {
  $('.navbar-collapse').collapse('hide');
});

const scrollUp = document.querySelector('.scrollUp');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 1300) {
    scrollUp.classList.add("active");
  } else {
    scrollUp.classList.remove("active");
  }
});
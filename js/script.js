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

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 900) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) { 
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '900');
});
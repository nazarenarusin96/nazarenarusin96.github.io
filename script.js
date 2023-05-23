$(document).ready(function() {
    $('.burger').click(function() {
      $(this).toggleClass('active');
      $('.nav-links').slideToggle(500);
    });
  });
  
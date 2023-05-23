$(document).ready(function() {
    $('.burger').click(function() {
      $('.nav-links').slideToggle(500);
      $('.line1').toggleClass('line1-toggle');
      $('.line2').toggleClass('line2-toggle');
      $('.line3').toggleClass('line3-toggle');
    });
  });
  
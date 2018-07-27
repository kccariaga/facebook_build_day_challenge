$(document).ready(function(){
  $('.content').on('click', 'h2', function(e) {
    e.preventDefault();
    $(this)
      .next('p')
      .not(':animated')
      .slideToggle();
  });
});
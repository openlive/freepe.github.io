$(document).ready(function(){
  $('.list').on('click', function(){
    $('.list-block').toggleClass('disp-none');
  });
  $('.view').on('click', function(){
    $('.view-block').toggleClass('disp-none');
  });
});
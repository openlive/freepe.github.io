"use strict";

$(document).ready(function(){
  $('.hidden-block__header').on('click', function(){
    $(this).toggleClass('show-body').parents('.hidden-block').find('.hidden-block__body').toggleClass('body-animate-hidden');
  });
});
//Так приятней :)
window.log = function(param){
    console.log(param);
};

$(document).ready(function () {
    var $num = $('.contacts__num').text();
    var $hideNum = $num.slice(0, 11);
    $('.contacts__num').text($hideNum + " .... ").addClass('hiddenNum');

    $('.showNum').on('click', function(){
       var $numBlock = $(this).parents('.item__block').find('.contacts__num');
        if($numBlock.hasClass('hiddenNum')){
            $('.contacts__num').text($num).removeClass('hiddenNum');
            $(this).text('Скрыть');
        } else if( !$numBlock.hasClass('hiddenNum') ){
            $('.contacts__num').text($hideNum + " .... ").addClass('hiddenNum');
            $(this).text('Показать');
        }
    });
});
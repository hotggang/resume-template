$(document).ready(function(){
    $('.universe__main .universe__tab a').click(function(e){
        e.preventDefault();

        $('.universe__main .universe__tab a').removeClass('active');

        $(this).addClass('active');

        var index = $(this).parent().index();

        $('.universe__main .universe__content > div').removeClass('active');
        $('.universe__main .universe__content > div').eq(index).addClass('active');
    });
});
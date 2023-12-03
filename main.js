$(document).ready(function(){
    $('.main .tab a').click(function(e){
        e.preventDefault();

        $('.main .tab a').removeClass('active');

        $(this).addClass('active');

        var index = $(this).parent().index();

        $('.main .tab_content > div').removeClass('active');
        $('.main .tab_content > div').eq(index).addClass('active');
    });
});
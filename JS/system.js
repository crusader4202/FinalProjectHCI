$(document).ready(
    function() {
    //burger-popup
    $('.burger-butt').click(function(){
        if( $('.pop-up-wrapper').css('display')== 'block'){
            $('.pop-up-wrapper').css({display: 'none'})
        }
        else {
            $('.pop-up-wrapper').css({display: 'block'})
        }
        
    })
})
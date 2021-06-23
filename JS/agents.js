$(document).ready(
    function(){

    $('.burger-butt').click(function(){
        if( $('.pop-up-wrapper').css('display')== 'block'){
            $('.pop-up-wrapper').css({display: 'none'})
        }
        else {
            $('.pop-up-wrapper').css({display: 'block'})
        }
            
    })
    let totalSlide = $('.slider div.slides div.slide').length
    let slidewidth = $('.slider div.slides div.slide').width()
    let slideheight = $('.slider div.slides div.slide').height()
    let totalWidth = totalSlide*slidewidth

    $('.slider').css({width : slidewidth, height : slideheight})
    $('.slider div.slides').css({width : totalWidth, marginLeft : -slidewidth})
    $('.slider div.slides div.slide:last-child').prependTo('.slider div.slides')


    $('#prev-butt').click(function(){
        $('.slider div.slides').animate({
            opacity : 0
        }, 300, function() {
            $('.slider div.slides div.slide:last-child').prependTo('.slider div.slides')
            $('.slider div.slides').css({left : ""})
            $('.slider div.slides').animate({
                opacity : 1
            })
        })
    })

    $('#next-butt').click(function(){
        $('.slider div.slides').animate({
            opacity : 0
        }, 300, function() {
            $('.slider div.slides div.slide:first-child').appendTo('.slider div.slides')
            $('.slider div.slides').css({left : ""})
            $('.slider div.slides').animate({
                opacity : 1
            })
        })
    })
})
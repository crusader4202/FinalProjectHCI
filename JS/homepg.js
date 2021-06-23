$(document).ready(function() {
    //burger-popup
    $('.burger-butt').click(function(){
        if( $('.pop-up-wrapper').css('display')== 'block'){
            $('.pop-up-wrapper').css({display: 'none'})
        }
        else {
            $('.pop-up-wrapper').css({display: 'block'})
        } 
    })
    
    

    //agent slider
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



    //map slider
    let mapSlide = $('.slider-map div.slides-map div.slide-map').length
    let mapwidth = $('.slider-map div.slides-map div.slide-map').width()
    let mapheight = $('.slider-map div.slides-map div.slide-map').height()
    let maptotalWidth = mapSlide*mapwidth

    $('.slider-map').css({width : mapwidth, height : mapheight})
    $('.slider-map div.slides-map').css({width : maptotalWidth, marginLeft : -mapwidth})
    $('.slider-map div.slides-map div.slide-map:last-child').prependTo('.slider-map div.slides-map')


    $('#map-prev').click(function(){
        $('.slider-map div.slides-map').animate({
            left: mapwidth
        }, 1000, function() {
            $('.slider-map div.slides-map div.slide-map:last-child').prependTo('.slider-map div.slides-map')
            $('.slider-map div.slides-map').css({left : ""})
        })
    })

    $('#map-next').click(function(){
        $('.slider-map div.slides-map').animate({
            left: -mapwidth
        }, 1000, function() {
            $('.slider-map div.slides-map div.slide-map:first-child').appendTo('.slider-map div.slides-map')
            $('.slider-map div.slides-map').css({left : ""})
        })
    }) 


})
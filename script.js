
var Swiper = new swiper(".mySwiper-1", {
    slidesperView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    }, 
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var Swiper = new swiper(".mySwiper-2", {
    slidesperView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupwithblank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
    breakpoints : {
        0: {
            slidesPerview:1,
        },
        520: {
            slidesPerview2,
        },
        950: {
            slidesPerview3,
        },
}});

let tabinputs = document.querySelectorAll(".tabinput");

tabinputs.forEach(function(input) {

    input.addEventListener('change' ,function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();

    })
});
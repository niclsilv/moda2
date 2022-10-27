var swiper = new swiper(".mySwiper", {
    slidesPerView:3,
    spaceBetween:30,
    slidesPerGroup:3,
    loop:true,
    loopFillGroupWitchBlank:true,
    pagination:{
        el:"swiper.pagination",
        clickable:true,
    },
    navigation:{
     nextEl:".swiper-button-next",
     prevEl:".swiper-button-prev"   
    }
}
)

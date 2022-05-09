$(document).ready(function(){
    $('.active-slide').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        navText:['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        navElement: 'div',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.project-active').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        navText:['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        navElement: 'div',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    $('.blog-active-wrapper').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        navElement: 'div',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.testimonial-active-wrapper').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        navText:['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        navElement: 'div',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.active-brands-logo').owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        margin: 50,
        navElement: 'div',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            970:{
                items:3
            },
            1200:{
                items:6
            }
        }
    })

    $('.test-popup-link').magnificPopup({
        type: 'iframe'
      });

    jQuery('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu',
    });
});
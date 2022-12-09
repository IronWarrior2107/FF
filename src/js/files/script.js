// // Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile } from "./functions.js";
import { formsModules } from "./forms/forms.js";

let hamburger_1 = document.querySelector('.mobile-menu');

hamburger_1.addEventListener('click', function() {
    hamburger_1.classList.toggle('is-active');
})

let hamburger_2 = document.querySelector('.menu-catalog');

hamburger_2.addEventListener('click', function() {
    hamburger_2.classList.toggle('is-active');
})

document.addEventListener("click",documentActions);

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenu = document.querySelector(`[data-submenu]`);
        const catalogHeader = document.querySelector('.catalog-header');
        if (subMenu){
            catalogHeader.classList.toggle('_menu-none');
        }else {
            console.log('No')
        }
        e.preventDefault();
    }
}

$(function () {
        $('.sub-menu-catalog__category-wrapper').hover(
        function () {
            $('.sub-menu-catalog__wrapper ul').css("display", "block").fadeOut(0);
            $(this).find('ul').fadeIn(100);
        }
    );
});

const mobileMenu = document.querySelector('.mobile-menu__wrapper');
if (mobileMenu){
    const menuBody = document.querySelector('.top-header__container');
    mobileMenu.addEventListener("click", function(e) {
        menuBody.classList.toggle('menu-open')
    });
}

$(document).ready(function() {
    $('.main-class').click(function() {
    $(this).siblings(".catalog-сlosed").toggle(
    function () {
        $(this).find('ul').slideDown();
    },
    function() {
        $(this).find('ul').slideUp('fast');
    }
    )});
});
    
$(document).ready(function() {
    $('.sub-class').click(function() {
    $(this).siblings(".sub-catalog-сlosed").toggle(
    function () {
        $(this).find('ul').slideDown();
    },
    function() {
        $(this).find('ul').slideUp('fast');
    }
    )});
});

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 10,
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
    pagination: {
		el: '.swiper-pagination',
		clickable: true,
        dynamicBullets: true,
	},
    initialSlide: 3,
    loop: true,
    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,
        disableOnInteractio: true,
    }
});
// function getRandom(min, max) {
//     return Math.round(Math.random() * (max - min) + min)
// };
//console.log(getRandom(10, 42));
$(document).ready(function(){
    $('.body-header__menu').click(function(){
    $('#hint').slideToggle('fast');
    });
    });
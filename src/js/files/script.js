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
        $('.sub-menu-catalog__wrapper ul').css("display", "none").hide();
        $(this).find('ul').show();
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

document.querySelector('.main-class').onclick = function() {
    this.classList.toggle('arrow_d')
}

document.querySelector('.mobile-menu').onclick = function() {
    this.classList.toggle('fix')
}

$('.sub-class').click(function() {
    this.classList.toggle('arrow_d');
});

$('.products-cards__favorite').click(function() {
    this.classList.toggle('_icon-favorite_1');
});

$(document).ready(function() {
    $('.main-class').click(function() {
    $(this).siblings(".catalog-сlosed").toggle(
    function () {
        $(this).find('ul').slideDown();
    },
    function() {
        $(this).find('ul').slideUp('');
    }
    )});
});
    

$(document).ready(function(){
	$('.sub-menu-catalog__more-link').click(function(){
		$(this).prev('.sub-menu-catalog__more-list').slideToggle(300)( function(){
			if ($(this).is(':hidden')) {
				$('.sub-menu-catalog__more-link').html('Ещё');
			} else {
				$('.sub-menu-catalog__more-link').html('Скрыть');
			}							
		});
		return false;
	});
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


// function getRandom(min, max) {
//     return Math.round(Math.random() * (max - min) + min)
// };
// console.log(getRandom(1, 100));
$(document).ready(function(){
    $('.body-header__menu').click(function(){
    $('#hint').toggle();
    });
    });

    // document.querySelectorAll('.products-cards__like-button').addEventListener('click', e => {
    //     e.currentTarget.classList.toggle('liked');
    // });

    $('.products-cards__like-button').click(function() {
        this.classList.toggle('liked');
    });
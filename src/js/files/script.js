// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
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
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const subMenu = document.querySelector(`[data-submenu]`);
        const catalogMenu = document.querySelector('.sub-menu-catalog');
        const catalogHeader = document.querySelector('.catalog-header');
        if (subMenu){
            catalogHeader.classList.toggle('_menu-none');
            catalogMenu.classList.toggle('_sub-menu-show');
            targetElement.classList.toggle('_sub-menu-active');
            subMenu.classList.toggle('_sub-menu-open');
        }else {
            console.log('No')
        }
        e.preventDefault();
    }
}


$(function () {
    $('.topmenu ul li').hover(
        function () {
        $(this).find('ul').stop(true, true);
        $(this).find('ul').fadeIn('fast');
    },
    function () {
        $(this).find('ul').fadeOut('stop');
    }
    );
});


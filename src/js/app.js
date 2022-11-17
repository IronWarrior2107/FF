import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

// Подключение основного файла стилей
//import "../scss/style.scss";

/* Динамический адаптив */
import "./libs/dynamic_adapt.js";


/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();


// /* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();

// Модуль работы со спойлерами
// Документация:
// Сниппет (HTML): spollers
// */
flsFunctions.spollers();

// /*
// Модуль работы с табами
// Документация:
// Сниппет (HTML): tabs
// */
flsFunctions.tabs();

// //работа с формами
import * as flsForms from "./files/forms/forms.js";

// /* Работа с полями формы: добавление классов, работа с placeholder. */
flsForms.formFieldsInit();

// /* Модуль звездного рейтинга */
flsForms.formRating();

// /* Модуль работы с select. Для включения ??? (подсказок в консоли) передать true */
// flsForms.formSelect(false);

import "./files/script.js";


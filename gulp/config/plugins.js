import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; //  Обработка ошибок
import notify from "gulp-notify"; // сообщения (подсказки)
import browsersync from "browser-sync"; //локальный срвер
import newer from "gulp-newer"; // проверка обновления 
import ifPlugin from "gulp-if"; // условное ветвление 

// Экспортируем объект
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}
//получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // путь к папке с результатом
const srcFolder =`./src`; //  путь к папке с исходниками


export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,  // туда помещаем html файлы
        images: `${buildFolder}/img`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/` // все файлы из папки с исходниками переносятся в папку с результатом
    }, // путь к папке с результатом
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`, // можно продолжить список
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`, // путь к папке с исходными html файлами
        files: `${srcFolder}/files/**/*.*`, // путь к папке с файлами, которые мы хотм скопировать
        svgicons: `${srcFolder}/svgicons/*.svg`,
    }, // путь к папке с исходниками
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`, // наблюдение за всеми html фалами, где бы они не были
        images: `{srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        svgicons: `{srcFolder}/svg/**/*.svg`,
        files: `${srcFolder}/files/**/*.*` // наблюдатель за файлами 
    },
    clean: buildFolder,
    buildFolder: buildFolder, 
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test` //папка на удалённом сервере
    //вся информация о путях к файлам и папке
}
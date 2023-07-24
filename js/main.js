"use strict";
//variables
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;
//Funciones
function menus() {
    let desplazamiento_actual = window.scrollY;

    if (desplazamiento_actual <= 100) {
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top='100px'
        abrir.style.color='#6D4E2E';
    } else {
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top='110px'
        abrir.style.color='#75614A';
    }
}

function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden'
        cerrado = true;
    }
}
//Eventos

window.addEventListener('click', function(e){
    if (cerrado==false) {
        let span=document.querySelector('span');
        if (e.target!==span && e.target!==abrir) {
            menu.style.width='0%';
            menu.style.overflow='hidden';
            cerrado=true;
        }
    }
});

window.addEventListener('scroll', function () {
    menus();
});
window.addEventListener('resize', function(){
    if (screen.width>=700) {
        cerrado=true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

abrir.addEventListener('click', function () {
    apertura();
});

// Contador
// Obtener elementos del DOM
const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// Fecha inaugural
const estreno = '8 August 2023';

// Función para el contador de tiempo
function contadorDeTiempo() {
    const fechaInahugural = new Date(estreno);
    const fechaActual = new Date();

    // Total de segundos faltantes
    const totalSegundos = (fechaInahugural - fechaActual) / 1000;

    // Cálculo del tiempo partiendo del total de segundos faltantes
    const diasFaltantes = Math.floor(totalSegundos / 3600 / 24);
    const horasFaltantes = Math.floor(totalSegundos / 3600) % 24;
    const minutosFaltantes = Math.floor(totalSegundos / 60) % 60;
    const segundosFaltantes = Math.floor(totalSegundos % 60);

    // Insertar los datos en el DOM
    dias.innerHTML = diasFaltantes;
    horas.innerHTML = horasFaltantes;
    minutos.innerHTML = minutosFaltantes;
    segundos.innerHTML = segundosFaltantes;
}

// Ejecutar la función inicialmente
contadorDeTiempo();

// Actualizar el contador cada segundo
setInterval(contadorDeTiempo, 1000);
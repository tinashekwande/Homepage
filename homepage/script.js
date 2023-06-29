'use strict';

function darkmode() {
    let headerElements = document.getElementsByClassName('header-items');
    let bodyElement = document.body;
    let computedStyle = getComputedStyle(bodyElement);
    let backgroundColor = computedStyle.backgroundColor;
    let logoElement = document.getElementById('mylogo');
    let navElements = document.getElementsByClassName('navLink');
    let h2Elements = document.getElementsByTagName('h2');
    let h1Elements = document.getElementsByTagName('h1');
    let textElements = document.querySelectorAll('.text');
    let modeElement = document.getElementById('mode');
    let mainElements = document.getElementsByClassName('main-content');
    let widgetElements = document.getElementsByClassName('widget-container');
    let contactElements = document.getElementsByTagName('input');
    let labelElements = document.getElementsByTagName('label');



    bodyElement.style.backgroundColor = '#222222';
    logoElement.src = 'mylogo5.png';
    logoElement.alt = 'light-logo';
    modeElement.innerHTML = 'Light';
    modeElement.style.color = 'white';

    for (let i = 0; i < labelElements.length; i++){
        labelElements[i].style.color = '#B3E0FF';
    }


    for (let i = 0; i < contactElements.length; i++){
        contactElements[i].style.backgroundColor = '#333';
    }

    for (let i = 0; i < headerElements.length; i++) {
        headerElements[i].style.boxShadow = '0px 0px 16px rgba(0, 0, 0, 0.6)';
        headerElements[i].style.backgroundColor = '#333';
        headerElements[i].style.border = 'none';
    }

    for (let i = 0; i < navElements.length; i++) {
        navElements[i].style.color = '#ADD8E6';
    }

    for (let i = 0; i < widgetElements.length; i++) {
        widgetElements[i].style.backgroundColor = '#333';
    }

    for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.color = '#fff';
    }

    for (let i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = '#ADD8E6';
    }

    for (let i = 0; i < textElements.length; i++) {
        textElements[i].style.color = '#ADD8E6';
    }

    for (let i = 0; i < mainElements.length; i++) {
        mainElements[i].style.boxShadow = '0px 0px 16px rgba(0, 0, 0, 0.6)';
        mainElements[i].style.backgroundColor = '#333';
        mainElements[i].style.border = 'none';
    }

    localStorage.setItem('mode', 'dark');
}

function lightmode() {
    let headerElements = document.getElementsByClassName('header-items');
    let bodyElement = document.body;
    let computedStyle = getComputedStyle(bodyElement);
    let backgroundColor = computedStyle.backgroundColor;
    let logoElement = document.getElementById('mylogo');
    let navElements = document.getElementsByClassName('nav-Link');
    let h2Elements = document.getElementsByTagName('h2');
    let h1Elements = document.getElementsByTagName('h1');
    let textElements = document.querySelectorAll('.text');
    let modeElement = document.getElementById('mode');
    let mainElements = document.getElementsByClassName('main-content');
    let widgetElements = document.getElementsByClassName('widget-container');
    let contactElements = document.getElementsByTagName('input');
    let labelElements = document.getElementsByTagName('label');


    bodyElement.style.backgroundColor = '#ADD8E6';
    logoElement.src = 'mylogo3.png';
    logoElement.classList.add('image-transition');
    modeElement.innerHTML = 'dark';
    modeElement.style.color = 'black';
    bodyElement.style.transition = 'background-color 1000ms';


    for (let i = 0; i < labelElements.length; i++){
        labelElements[i].style.color = '#333';
    }


    for (let i = 0; i < contactElements.length; i++){
        contactElements[i].style.backgroundColor = '#B3E0FF';
        contactElements[i].style.transition = 'background-color 1000ms';
    }

    for (let i = 0; i < headerElements.length; i++) {
        headerElements[i].style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
        headerElements[i].style.backgroundColor = '#B3E0FF';
        headerElements[i].style.border = 'none';
        headerElements[i].style.transition = 'background-color 1000ms';

    }

    for (let i = 0; i < mainElements.length; i++) {
        mainElements[i].style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
        mainElements[i].style.backgroundColor = '#B3E0FF';
        mainElements[i].style.border = 'none';
        mainElements[i].style.transition = 'background-color 1000ms';

    }

    for (let i = 0; i < navElements.length; i++) {
        navElements[i].style.color = 'blue';
    }

    for (let i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = 'blue';
    }

    for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.color = '#333';
    }

    for (let i = 0; i < textElements.length; i++) {
        textElements[i].style.color = '#333';
    }

    for (let i = 0; i < mainElements.length; i++) {
        mainElements[i].style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.5)';
    }

    for (let i = 0; i < widgetElements.length; i++) {
        widgetElements[i].style.backgroundColor = '#B3E0FF';
        widgetElements[i].style.transition = 'background-color 1000ms';
    }

    localStorage.setItem('mode', 'light');

}

document.addEventListener('DOMContentLoaded', function mode() {
    var storedMode = localStorage.getItem('mode');

    if (storedMode === 'dark') {
        darkmode();
    } else if (storedMode === 'light') {
        lightmode();
    }
});

let currentMode = localStorage.getItem('mode');

function toggleMode() {
  if (currentMode === 'light') {
    darkmode();
    currentMode = 'dark';
  } else {
    lightmode();
    currentMode = 'light';
  }
}


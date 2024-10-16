// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector(".copy");
const menuCopia =  menu.cloneNode(true);
copy.appendChild(menuCopia);

// Selecione o primeiro DT da dl de Faq
// Selecione o DD referente ao primeiro DT
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');
const primeiroDd = primeiroDt.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
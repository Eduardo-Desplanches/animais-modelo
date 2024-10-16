const menu = document.querySelector(".menu");
menu.classList.add("ativo");
menu.classList.remove("azul");
menu.classList.toggle("azul");

if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

// menu.className = 'ativo teste azul'; // tem como trocar de classe com a propriedade classeName



// menu.className += ' vermelho' // concatena

const animais = document.querySelector(".animais");
console.log(animais.attributes[0]);
// atributos que possuem hífen "-" devem ser colocados em colchetes e com aspas como se fosse uma string. ex: ["data-texto"]

// menu.className;
// console.log(menu.className); //String
// console.log(menu.classList); //lista de classes
// menu.classList.add('ativo');
// menu.classList.add('ativo', 'mobile'); //duas classes
// menu.classList.remove('ativo');
// menu.classList.toggle('ativo'); //adiciona/remove a classe
// menu.classList.contains('ativo'); // true ou false
// menu.classList.replace('ativo', 'inativo');

const img = document.querySelector('img');
const srcImg = img.getAttribute('alt');
img.setAttribute('alt', "É uma raposa");
const possuiAlt = img.hasAttribute('alt');
console.log(srcImg);
console.log(possuiAlt);

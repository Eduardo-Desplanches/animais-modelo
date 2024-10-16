// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((item) => {
  console.log(item);
});
// ou:

paragrafos.forEach((p) => console.log(p));

// Mostre o texto dos parágrafos no console
paragrafos.forEach((p) => console.log(p.innerHTML));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( ()=> {
  console.log(i++);
});

imgs.forEach(() => i++);

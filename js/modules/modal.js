export default function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir']");
  const botaoFechar = document.querySelector("[data-modal='fechar']");
  const containerMondal = document.querySelector("[data-modal='container']");

  if (botaoAbrir && botaoFechar && containerMondal) {
    function toggleModal(event) {
      event.preventDefault();
      containerMondal.classList.toggle("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    containerMondal.addEventListener("click", cliqueForaModal);
  }
}

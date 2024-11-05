export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.45;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTopo = section.getBoundingClientRect().top - windowMetade;
        const isSectionVisible = sectionTopo - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
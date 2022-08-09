window.addEventListener("scroll", onScroll);

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  let home = document.getElementById("home");
  let services = document.getElementById("services");
  let about = document.getElementById("about");
  let contact = document.getElementById("contact");
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  console.log(targetLine);

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndPassedTargetLine = targetLine >= sectionEndsAt;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  } else {
    menuElement.classList.remove("active");
  }
}

function showNavOnScroll() {
  let navigation = document.getElementById("navigation");
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  let backToTopButton = document.getElementById("backToTopButton");
  if (scrollY > 500) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
          #home, 
          #home img,
          #home .stats,
          #services,
          #services header,
          #services .card,
          #about,
          #about header,
          #about content,
          #contact header,
          #contact content
        `);

let mainNav: HTMLElement = <HTMLElement>document.getElementById("main-nav");
let navList: HTMLElement = <HTMLElement>document.getElementById("nav-list");

let mobile = document.createElement("div");
mobile.classList.add("nav-mobile");
mainNav.querySelector(".container")!.appendChild(mobile);

function bodyOnScroll(event: Event) {
  if (window.pageYOffset > 40) {
    mainNav.classList.remove("navbar-custom");
    if (!mainNav.classList.contains("transToWhiteBg")) {
      mainNav.classList.add("transToWhiteBg");
    }
    mainNav.classList.remove("whiteToTransBg");
  } else {
    mainNav.classList.add("navbar-custom");
    if (
      mainNav.classList.contains("transToWhiteBg") &&
      !mainNav.classList.contains("whiteToTransBg")
    ) {
      mainNav.classList.add("whiteToTransBg");
    }
    mainNav.classList.remove("transToWhiteBg");
  }
}

function toggleMobileNav() {
  if (navList.classList.contains("nav-mobile-open")) {
    navList.classList.remove("nav-mobile-open");
  } else {
    navList.classList.add("nav-mobile-open");
  }
}

window.addEventListener("scroll", ev => bodyOnScroll(ev));
mobile.addEventListener("click", ev => toggleMobileNav());
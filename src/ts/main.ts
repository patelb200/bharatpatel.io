let body: HTMLBodyElement = <HTMLBodyElement>document.body;
let mainNav: HTMLElement = <HTMLElement>document.getElementById("main-nav");
let btnTellMeMore: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("btnTellMeMore")
);

let btnAboutMe: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("btnAboutme")
);

let btnServices: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("btnServices")
);

function bodyOnScroll(event: UIEvent) {
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

function scrollToElementById(elementId: string) {
  let element: HTMLElement = <HTMLElement>document.getElementById(elementId);
 console.log(element)
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

window.addEventListener("scroll", ev => bodyOnScroll(ev));

btnTellMeMore.addEventListener("click", ev => {
  scrollToElementById("about-section");
});

btnAboutMe.addEventListener("click", ev => {
  scrollToElementById("about-section");
});

btnServices.addEventListener("click", ev => {
  scrollToElementById("services-section");
});

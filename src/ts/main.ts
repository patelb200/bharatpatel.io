let body: HTMLBodyElement = <HTMLBodyElement>document.body;

let btnTellMeMore: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("btnTellMeMore")
);

let btnAboutMe: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("btnAboutme")
);

let btnServices: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("btnServices")
);

let btnBadges: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("btnBadges")
);


let btnContactMe: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById("btnContactMe")
);

let btnScrollToTop: HTMLElement = <HTMLElement>(
  document.getElementById("btnScrollToTop")
);


function scrollToElementById(elementId: string) {
  let element: HTMLElement = <HTMLElement>document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

btnTellMeMore.addEventListener("click", ev => {
  scrollToElementById("about-section");
  ev.stopPropagation();
});

btnAboutMe.addEventListener("click", ev => {
  scrollToElementById("about-section");
  ev.stopPropagation();
});

btnServices.addEventListener("click", ev => {
  scrollToElementById("services-section");
  ev.stopPropagation();
});

btnBadges.addEventListener("click", ev => {
  scrollToElementById("badges-section");
  ev.stopPropagation();
});

btnContactMe.addEventListener("click", ev => {
  scrollToElementById("contact-section");
  ev.stopPropagation();
});
btnScrollToTop.addEventListener("click", ev => {
  scrollToElementById("body");
});

btnScrollToTop.addEventListener("touchend", ev => {
  scrollToElementById("body");
});


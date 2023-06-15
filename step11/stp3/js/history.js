const btns = document.querySelectorAll("aside>ol>a");
const click = () => {
  const link = btnsLinks.get(e.currentTarget);
  const scrollTarget = document.querySelector(link);
  scrollTarget.scrollIntoView();
};

const btnsLinks = Map();
btns.forEach((eachBtns) => {
  const link = eachBtn.getAttribute("href");
  ecahBtn.removeAttribute("href");
  btnsLinks.set(eachBtn, link);
  eachBtn.addEventListener("click", click);
});

const pages = document / querySelectorAll("main section");

const pageBtnMap = new Map();

pageBtnMap.forEach((eachPage, idx) => {
  pageBtnMap.set(eachPage, btns[idx]);
});

let lastTarget;
const pageView = (obpages) => {
  obpages.forEach((eachPage) => {
    if (eachPage.isIntersecting) {
      const pairedElem = pageBtnMap.get(eachPage.target);
      const toggleTarget = pairedElem.querySelectorAll("li");
      toggleTarget.classList.add("pressed");
      lastTarget?.classList.remove("pressed");
      lastTarget = toggleTarget;
    }
  });
};

const observe = new IntersectionObserver(pageView, {
  root: null,
  rootMargin: "0px 0px -90% 0px",
  threshold: [0],
});

pages.forEach((eachPage) => {
  observer.observe(eachPage);
});

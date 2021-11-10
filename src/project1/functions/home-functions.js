//Function sets dynamically left and top properties values of background inscription in header. It's to avoid
//moving this element during window resizing
export const setCoordinates = (element, title, parent, value) => {
  element.style.left =
    title.getBoundingClientRect().left -
    parent.getBoundingClientRect().left +
    "px";
  element.style.top =
    title.getBoundingClientRect().top -
    parent.getBoundingClientRect().top -
    value * element.clientHeight +
    "px";
};

//Function detects size of window and depending on result, passes arguments to setCoordinates function
export const detectSize = (element, title, parent) => {
  if (window.innerWidth > 768) {
    setCoordinates(element, title, parent, 0.7);
  } else if (window.innerWidth < 768 && window.innerWidth > 480) {
    setCoordinates(element, title, parent, 0.8);
  } else if (window.innerWidth < 480) {
    setCoordinates(element, title, parent, 0.6);
  }
};

//Function makes stripe with my photo comming from right when page is scrolled down to certain value
// and makes it hiding when page is scrolled up to certain value. It's doing it by adding or removing appropriate css class
// Value of scrolled part of page is different on different page height (different devices)
export const accordionStripe = (el, value, newClassName, resultStripe) => {
  if (
    document.querySelector(".home").offsetHeight /
      document.documentElement.offsetHeight >
      0.5 &&
    document.querySelector(".home").offsetWidth <= 768
  ) {
    if (
      document.documentElement.scrollTop /
        document.querySelector(".home").offsetHeight >=
      0.15
    ) {
      for (let i = 0; i < el.classList.length; i++) {
        if (el.classList[i] == newClassName) {
          resultStripe = true;
        }
      }
      if (resultStripe !== true) {
        el.classList.add(newClassName);
      }
    }

    if (
      document.documentElement.scrollTop /
        document.querySelector(".home").offsetHeight <
      0.15
    ) {
      for (let i = 0; i < el.classList.length; i++) {
        if (el.classList[i] == newClassName) {
          resultStripe = true;
        }
      }
      if (resultStripe == true) {
        el.classList.remove(newClassName);
      }
      resultStripe = false;
    }
  }
};

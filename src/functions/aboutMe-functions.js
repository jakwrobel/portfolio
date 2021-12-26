//Function makes window comming from down, when page is scrolled to certain value and makes it hiding back when page
//is scrolled to certain value
export const moveWindow = (value, topPos, movableWindow) => {
  if (document.documentElement.querySelector(".home").offsetWidth > 768) {
    value = 0.09;
  } else {
    value = 0.25;
  }

  if (
    document.documentElement.scrollTop /
      document.documentElement.offsetHeight >=
    value
  ) {
    if (topPos >= 22) {
      while (topPos > 0) {
        topPos -= 22;
        movableWindow.style.top = topPos + "vh";
      }
    }
  }

  if (
    document.documentElement.scrollTop / document.documentElement.offsetHeight <
    value
  ) {
    if (topPos <= 44) {
      while (topPos < 66) {
        topPos += 22;
        movableWindow.style.top = topPos + "vh";
      }
    }
  }
};

//Function keeps lights on topbar of window being circular. Prevents size changing while resizing the window
export const changeDimension = (element) => {
  if (
    document.querySelector(".window__lights-wrap").clientWidth * 0.2 >
    document.querySelector(".window__lights-wrap").clientHeight * 0.5
  ) {
    for (let i = 0; i < element.length; i++) {
      element[i].style.height = "50%";
      element[i].style.width = element[0].clientHeight + "px";
    }
  } else {
    for (let i = 0; i < element.length; i++) {
      element[i].style.width = "20%";
      element[i].style.height = element[0].clientWidth + "px";
    }
  }
};

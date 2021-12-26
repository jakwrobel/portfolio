//This function is triggered when hamburger has been clicked. Function adds or removes styles of mobile version of menu
export const triggerMenu = (isTriggered, changeMenu) => {
  let menu = document.querySelector(".menu");
  let menuMidCol = document.querySelector(".menu__mid-col");
  let leftMenu = document.querySelector(".left-part-menu");
  let rightMenu = document.querySelector(".righ-part-menu");
  let logoWrap = document.querySelector(".left-part-menu__logo");
  let subpagesWrap = document.querySelector(".left-part-menu__subpages-wrap");

  if (!isTriggered) {
    subpagesWrap.classList.add("left-part-menu__subpages-wrap--clicked");
    menu.classList.add("menu--clicked");
    menuMidCol.classList.add("menu__mid-col--clicked");
    leftMenu.classList.add("left-part-menu--clicked");
    changeMenu(true);
  } else {
    subpagesWrap.classList.remove("left-part-menu__subpages-wrap--clicked");
    menu.classList.remove("menu--clicked");
    menuMidCol.classList.remove("menu__mid-col--clicked");
    leftMenu.classList.remove("left-part-menu--clicked");
    changeMenu(false);
  }
};

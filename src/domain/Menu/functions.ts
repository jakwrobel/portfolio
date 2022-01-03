const showMenu = () => {
  let element = document.querySelector<HTMLDivElement>(".Menu_wrap__1oq12")!;
  let result = false;
  for (let i = 0; i < element.classList.length; i++) {
    if (element.classList[i] === ".Menu_active__Atx-i") {
      result = true;
    }
  }
  if (result === false) {
    element.classList.toggle("Menu_active__Atx-i");
  } else if (result === true) {
    element.classList.remove("Menu_active__Atx-i");
  }
};

export default {
  showMenu,
};

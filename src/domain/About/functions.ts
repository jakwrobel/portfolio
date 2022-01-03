const moveWindow = (value: number, movableWindow: HTMLElement) => {
  let topPos =
    document.querySelector<HTMLElement>(".About_window__i_i_b")!.style.top ===
    ""
      ? 0
      : parseInt(
          document.querySelector<HTMLElement>(".About_window__i_i_b")!.style.top
        );
  if (
    document.querySelector<HTMLElement>(".Introduction_wrap__1lLU3")!
      .offsetWidth > 768
  ) {
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

export default {
  moveWindow: moveWindow,
};

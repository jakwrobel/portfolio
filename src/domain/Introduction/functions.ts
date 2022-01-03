const moveStripe = (element: any) => {
  if (
    document.querySelector<HTMLDivElement>(".Introduction_wrap__1lLU3")!
      .offsetWidth <= 768
  ) {
    if (
      document.documentElement.scrollTop /
        document.querySelector<HTMLDivElement>(".Introduction_wrap__1lLU3")!
          .offsetHeight >=
      0.15
    ) {
      if (element.style.left !== "0px") {
        element.style.left = "0px";
      }
    } else {
      if (element.style.left === "0px") {
        element.style.left = "100%";
      }
    }
  }
};

export default {
  moveStripe,
};

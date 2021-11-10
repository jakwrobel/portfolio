//Function scrolls up the window when button is clicked
export const handleClick = (interRef) => {
  if (window.document.documentElement.scrollTop > 0) {
    interRef.current = setInterval(() => {
      window.document.documentElement.scrollTop =
        window.document.documentElement.scrollTop - 50;
      if (window.document.documentElement.scrollTop < 5) {
        clearInterval(interRef.current);
      }
    }, 1);
  }
};

document.querySelectorAll("*").forEach((el) => {
  const style = window.getComputedStyle(el);
  if (style.filter.includes("grayscale")) {
    el.style.setProperty("filter", "none", "important");
  }
});

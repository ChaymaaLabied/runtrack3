const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; //commence à 0 et termine à 4096-800
  const docHeight = document.body.scrollHeight - window.innerHeight; // alors 4096-800 C fixe c la distance max qu'on peut scroller 
  const scrollPercent = (scrollTop / docHeight) * 100; // ex : 400/3296*100


  const r = Math.round(255 - (255 * scrollPercent / 100));
  const g = Math.round(255 * scrollPercent / 100);
  const b = 0;

  footer.style.backgroundColor = `rgb(${r},${g},${b})`;
});

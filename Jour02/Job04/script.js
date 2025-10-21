const textarea = document.getElementById("keylogger");
document.addEventListener("keydown", (event) => {
    const key = event.key;
  if (/^[a-zA-Z]$/.test(key)) {
    const isFocusInTextarea = document.activeElement === textarea;
    if (isFocusInTextarea) {
      textarea.value += key;
    } else {
      textarea.value += key;
    }
  }
});

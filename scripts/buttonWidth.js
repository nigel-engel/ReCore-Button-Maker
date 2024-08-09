const widthInput = document.getElementById("widthInput");
const button = document.getElementById("Button");

function updateButtonWidth(width) {
  if (width === "") {
    document.documentElement.style.removeProperty("--button-width");
    button.style.width = "auto";
  } else {
    document.documentElement.style.setProperty("--button-width", width + "px");
    button.style.width = width + "px";
  }
}

function updateInputValue() {
  const actualWidth = button.offsetWidth;
  widthInput.value = actualWidth;
}

widthInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const selectedWidth = event.target.value;
    updateButtonWidth(selectedWidth);
    updateInputValue(); // Update input value after changing button width
  }
});

// Prevent 'e' from being entered
widthInput.addEventListener("keypress", function (event) {
  if (event.key === 'e' || event.key === 'E') {
    event.preventDefault();
  }
});

button.addEventListener("transitionend", updateInputValue);

// Initial setup
updateButtonWidth(widthInput.value);
updateInputValue();

// Update input when window is resized (in case of responsive design affecting button width)
window.addEventListener("resize", updateInputValue);

// MutationObserver to watch for changes in button content
const observer = new MutationObserver(updateInputValue);
observer.observe(button, { childList: true, characterData: true, subtree: true });
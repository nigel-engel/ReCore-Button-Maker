const widthInput = document.getElementById("widthInput");
const button = document.getElementById("Button");

function getMinButtonWidth() {
  const clone = button.cloneNode(true);
  clone.style.width = "auto";
  clone.style.position = "absolute";
  clone.style.visibility = "hidden";
  document.body.appendChild(clone);
  const contentWidth = clone.offsetWidth;
  document.body.removeChild(clone);

  const computedStyle = window.getComputedStyle(button);
  const paddingLeft = parseInt(computedStyle.paddingLeft);
  const paddingRight = parseInt(computedStyle.paddingRight);

  return contentWidth + paddingLeft + paddingRight;
}

function updateButtonWidth(width) {
  const minWidth = getMinButtonWidth();
  const finalWidth = Math.max(width, minWidth);
  ButtonModule.updateStyle("width", `${finalWidth}px`);
  ButtonModule.updateCSSVariable("width", `${finalWidth}px`);
}

function getCurrentButtonWidth() {
  return Math.max(
    parseInt(window.getComputedStyle(button).width, 10),
    getMinButtonWidth()
  );
}

function updateInputValue() {
  widthInput.value = getCurrentButtonWidth();
}

updateInputValue();

widthInput.addEventListener("keydown", function (event) {
  if (event.key === "e" || event.key === "E") {
    event.preventDefault();
  }

  if (event.key === "Enter") {
    const width = parseInt(this.value, 10);
    if (!isNaN(width) && width > 0) {
      updateButtonWidth(width);
    }
    updateInputValue();
  }
});

widthInput.addEventListener("blur", function () {
  if (this.value.trim() === "") {
    updateButtonWidth(getMinButtonWidth());
  } else {
    const width = parseInt(this.value, 10);
    if (!isNaN(width) && width > 0) {
      updateButtonWidth(width);
    }
  }
  updateInputValue();
});

const resizeObserver = new ResizeObserver(() => {
  updateButtonWidth(getCurrentButtonWidth());
  updateInputValue();
});
resizeObserver.observe(button);

window.addEventListener("resize", () => {
  updateButtonWidth(getCurrentButtonWidth());
  updateInputValue();
});

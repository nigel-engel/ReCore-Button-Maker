// Get references to DOM elements
const buttonWidth = document.getElementById("Button");
const widthInput = document.getElementById("widthInput");

// Function to calculate the minimum width of the button
function getMinButtonWidth() {
  // Create a clone of the button
  const clone = buttonWidth.cloneNode(true);
  // Set the clone's width to auto and hide it
  clone.style.width = "auto";
  clone.style.position = "absolute";
  clone.style.visibility = "hidden";
  // Add the clone to the document
  document.body.appendChild(clone);
  // Get the content width of the clone
  const contentWidth = clone.offsetWidth;
  // Remove the clone from the document
  document.body.removeChild(clone);

  // Get the computed style of the original button
  const computedStyle = window.getComputedStyle(buttonWidth);
  // Parse the left and right padding
  const paddingLeft = parseInt(computedStyle.paddingLeft, 10);
  const paddingRight = parseInt(computedStyle.paddingRight, 10);

  // Return the minimum width (content width + padding)
  return contentWidth + paddingLeft + paddingRight;
}

// Function to update the button's width
function updateButtonWidth(width) {
  const minWidth = getMinButtonWidth();
  const maxWidth = 999;
  // Ensure the width is between the minimum and maximum
  const finalWidth = Math.min(Math.max(width, minWidth), maxWidth);
  // Set the button's width
  buttonWidth.style.width = `${finalWidth}px`;
  // Update the CSS custom property
  document.documentElement.style.setProperty(
    "--button-width",
    `${finalWidth}px`
  );
}

// Function to get the current button width
function getCurrentButtonWidth() {
  return Math.max(
    parseInt(window.getComputedStyle(buttonWidth).width, 10),
    getMinButtonWidth()
  );
}

// Function to update the input value
function updateInputValue() {
  const currentWidth = getCurrentButtonWidth();
  // Limit the displayed width to 640px
  widthInput.value = Math.min(currentWidth, 640);
}

// Initialize the input value
updateInputValue();

// Event listener for input to remove non-numeric characters and limit max value
widthInput.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
  if (this.value > 999) {
    this.value = 999;
  }
});

// Event listener for keydown to prevent 'e' input and handle Enter key
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

// Event listener for input blur to handle empty input and update button width
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

// Resize observer to update button width when it changes
const resizeObserverWidth = new ResizeObserver(() => {
  updateButtonWidth(getCurrentButtonWidth());
  updateInputValue();
});
resizeObserverWidth.observe(buttonWidth);

// Window resize event listener to update button width
window.addEventListener("resize", () => {
  updateButtonWidth(getCurrentButtonWidth());
  updateInputValue();
});

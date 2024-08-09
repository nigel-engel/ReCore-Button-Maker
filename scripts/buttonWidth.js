document
  .getElementById("widthInput")
  .addEventListener("input", function (event) {
    const selectedWidth = event.target.value;
    document.getElementById("Button").style.width = selectedWidth + "px";
  });

document
  .getElementById("Button")
  .style.setProperty("--button-width", selectedWidth);

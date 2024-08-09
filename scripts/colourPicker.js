document
  .getElementById("colorPicker")
  .addEventListener("input", function (event) {
    const selectedColor = event.target.value;

    document.documentElement.style.setProperty(
      "--button-bg-color",
      selectedColor,
    );

    document.getElementById("Button").style.backgroundColor = selectedColor;
  });
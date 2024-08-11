const ButtonModule = (function() {
  const button = document.getElementById("Button");
  
  return {
    getButton: function() {
      return button;
    },
    updateStyle: function(property, value) {
      button.style[property] = value;
    },
    updateCSSVariable: function(property, value) {
      document.documentElement.style.setProperty(`--button-${property}`, value);
    }
  };
})();
const preview = document.getElementById("preview");
  const colorInput = document.getElementById("colorInput");
  const hexValue = document.getElementById("hexValue");

  colorInput.addEventListener("input", function () {
    updateColor(this.value);
  });

  function updateColor(color) {
    preview.style.background = color;
    hexValue.textContent = color.toLowerCase();
    colorInput.value = color;
  }

  function setColor(hex) {
    updateColor(hex);
  }

  function copyHex() {
    navigator.clipboard.writeText(hexValue.textContent);
    alert("Color copied: " + hexValue.textContent);
  }

  // Set default color
  updateColor("#ffffff");
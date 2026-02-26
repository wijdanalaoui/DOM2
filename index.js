document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeBtn = document.getElementById("change-color-btn");

//this function generates a random color
  function getRandomColor() {
    
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  changeBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
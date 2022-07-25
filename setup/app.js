

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();

  document.body.style.backgroundColor = '#' + randomColor;
  color.textContent = '#' + randomColor;
});

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

function copyColor () {
    var copyColor = document.getElementById('color-code').innerHTML
    navigator.clipboard.writeText(copyColor)
    alert('Copied')

  
}




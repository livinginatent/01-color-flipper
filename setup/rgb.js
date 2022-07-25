const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnRgb = document.getElementById('btn-rgb')
const color = document.querySelector(".color");
btnRgb.addEventListener('click', function(){
    const randomRgbColor = getRandomRgbColor()
    document.body.style.backgroundColor = randomRgbColor
    color.textContent = randomRgbColor

} )

function getRandomRgbColor (){
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function copyColor () {
    var copyColor = document.getElementById('color-code').innerHTML
    navigator.clipboard.writeText(copyColor)
    alert('Copied')

  
}

const test = document.querySelector("svg")

function getRandomColor() {
    let color = Math.floor(Math.random() * 247)
    if (color >= 47){
        return color;
    }
    else {
        return 47;
    }
}
test.style.filter = `drop-shadow(0 0 25px rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()}))`
setInterval(()=>{
        test.style.filter = `drop-shadow(0 0 25px rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()}))`
    },9000
);

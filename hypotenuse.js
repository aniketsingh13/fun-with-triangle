const sideTriangle = document.querySelectorAll(".sides-triangle");
const calculateHypotenuse = document.querySelector("#calculate-hypotenuse");
const output = document.querySelector("#output");

function totalSum(a, b) {
    const sumHypotenuse = (a * a) + (b * b)
    return sumHypotenuse;
}


function Hypotenuse() {

    const sumHypotenuse = totalSum(Number(sideTriangle[0].value), Number(sideTriangle[1].value))
    const ActualOutput = Math.sqrt(sumHypotenuse);
    output.innerText = "your Hypotenuse is " + ActualOutput;

}


calculateHypotenuse.addEventListener("click", Hypotenuse);
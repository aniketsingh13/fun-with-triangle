const inputArea = document.querySelectorAll(".input-area");
const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output");
 
function triangleValue(a,b){
    sumOfTriangle=0.5*(a*b)
    return sumOfTriangle;
}



function triangleCalculation(){
    const sumOfTriangle =triangleValue (Number(inputArea[0].value),Number(inputArea[1].value));
     output.innerText ="Area of triangle is "+ sumOfTriangle;
}





btnCheck.addEventListener("click",triangleCalculation)

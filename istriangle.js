const inputTriangle = document.querySelectorAll(".input-triangle");
const checkTriangle = document.querySelector("#check-triangle")
const outputTriangle = document.querySelector("#output-triangle");
function calculateSumOfAngles(a,b,c){
  const  sumOfAngles = a+b+c;
  return sumOfAngles;
  
}
   

 function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputTriangle[0].value),Number(inputTriangle[1].value),Number(inputTriangle[2].value));

    if(sumOfAngles === 180){
        outputTriangle.innerText = "yay,The angle from 🔺";
    }else
    {
        outputTriangle.innerText= "oh oh! the angles don't from a triangle 😔 ";
    }
 }


 checkTriangle.addEventListener("click",isTriangle);
   
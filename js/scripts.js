function bmi(p1, p2){
return p1 / p2
}




var weight = prompt("What is your weight (in pounds) ")

var height = prompt("What is your height (in inches) ")

var metWeight = weight / 2.2046

var metHeight = height * .0254

var squaredHeight = metHeight * metHeight

alert("Your BMI is " + bmi(metWeight,squaredHeight));

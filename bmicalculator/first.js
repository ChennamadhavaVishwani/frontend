document.getElementById("btn1").addEventListener("click", function (e) {
  e.preventDefault();
  let height, weight, measure, bmi, result;

  height = parseFloat(document.getElementById("height").value).toFixed(2);
  weight = parseFloat(document.getElementById("weight").value).toFixed(2);

  result = document.getElementById("result");

  if (height === "" || isNaN(height) || height <= 0) {
    result.innerHTML = "Please provide a valid height in kgs";
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    result.innerHTML = "Please provide a valid weight in kgs";
  } else {
    height /= 100;
    height *= height;
    bmi = weight / height;
    bmi = bmi.toFixed(1);

    if (bmi <= 18.4) {
      measure = `Your BMI is ${bmi} which means you are underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      measure = `Your BMI is ${bmi} which means you are normal`;
    } else if (bmi > 25 && bmi <= 29.9) {
      measure = `Your BMI is ${bmi} which means you are Overweight`;
    } else {
      measure = `Your BMI is ${bmi} which means you are Obese!!`;
    }
  }
  result.innerHTML = measure;
});

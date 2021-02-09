document.addEventListener("keydown", function(e){
  if (e.keyCode === 13){
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    if (weight && height){
      calculateBMI(weight, height);
    } else {
      alert("Oops, try filling in the data correctly.")
    }
  }
})

function calculateBMI(weight, height){
  let result = weight/(height * height);
  let showResult = document.querySelector(".result");
  showResult.innerHTML = "Your BMI is " + result.toFixed(2);
}

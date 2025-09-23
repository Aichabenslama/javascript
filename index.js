// LEVEL1
function fullName() {
  let fullName = "Aicha benslama";
  console.log(fullName);
}
fullName();
// 2-fullname
function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}
console.log(fullName("Aicha", "benslama"));
// 3-addnumber
function addNumber(number1, number2) {
  let add = number1 + number2;
  return add;
}
console.log(addNumber(23, 44));
// 4-arearectangle
function areaRectangle(lenght, widht) {
  let area = lenght * widht;
  return area;
}
console.log(areaRectangle(10, 5));
// 5-perimeter rectangle
function perimeterRectangle(lenght, widht) {
  let perimeter = (lenght + widht) * 2;
  return perimeter;
}
console.log(perimeterRectangle(10, 5));
// 6-volume rect prism
function volumeOfRectPrism(lenght, widht, height) {
  let volume = lenght * widht * height;
  return volume;
}
console.log(volumeOfRectPrism(10, 8, 6));
// 7-area of circle
function areaOfCircle(rayon, pi) {
  let area = pi * rayon ** 2;
  return area;
}
console.log(areaOfCircle(3, 3.14));
// 8- circumference
function circumOfCircle(rayon, pi) {
  let circum = 2 * rayon * pi;
  return circum;
}
console.log(circumOfCircle(5, 3.14));
// 9- density
function calculDensity(mass, volume) {
  let denity = mass / volume;
  return denity;
}
console.log(calculDensity(2, 4));
// 10- speed
function calculSpeed(distance, time) {
  let speed = distance / time;
  return speed;
}
console.log(calculSpeed(30, 15));
// 11- weight
function calculWeight(mass, gravity) {
  let weight = mass * gravity;
  return weight;
}
console.log(calculWeight(20, 10));
// 12-convertCelsiusToFahrenheit
function convertCelsiusToFahrenheit(oC) {
  let oF = (oC * 9) / 5 + 32;
  return oF;
}
console.log(convertCelsiusToFahrenheit(5));
// 13-body mass
function calculBmi(weight, height) {
  let bmi = weight / (height * height);
  return bmi;
}
console.log(calculBmi(65, 1.7));
function compare(calculBmi) {
  if (calculBmi < 18.5) {
    return "underWeight";
  } else if (calculBmi >= 18.5 && calculBmi <= 24.9) {
    return "normalWeight";
  } else if (calculBmi <= 29.9 && calculBmi >= 25) {
    return "overWeight";
  }
}
console.log(compare(calculBmi(65, 1.7)));
// 14- check season
function checkSeason(month) {
  month = month.toLowerCase();

  switch (month) {
    case "december":
    case "january":
    case "february":
      return "Winter";

    case "march":
    case "april":
    case "may":
      return "Spring";

    case "june":
    case "july":
    case "august":
      return "Summer";
    case "september":
    case "october":
    case "november":
      return "Autumn";
  }
}
console.log(checkSeason("OCtober"));

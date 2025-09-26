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

// LEVEL 2
// 1- linear equation
function solveLinEqua(a,b,c,x,y){
  return a*x+b*y+c;
}
console.log(solveLinEqua(2,3,1,2,4));
// 3-print array
// function printArray (array){
//   for (let i=0;i<array.lenght;i++){
//     console.log(array[i]);
//   }
// }
// printArray([1]);
// 4- date time
function showDateTime(day,month,year,hour,munite){
  return `${day}/${month}/${year} ${hour}:${munite}`;
  
}
console.log(showDateTime(23,2,2004,5,22));
// 5-swapValue
function swapValue(x,y){
  let aux=x;
  x=y;
  y=aux;
  return `x=${x},y=${y}`
}
console.log(swapValue(2,4));
//6-

function reverseArray(array) {
    const reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverse[reverse.length] = array[i]; 
    }
    return reverse;
}
const arr =[1,2,3,4];
console.log(reverseArray(arr));
//8-
function additem(item){
  let array=[];
  array.push(item);
  return array;
}
console.log(additem("tunis"));
console.log(additem("italie"));
//9-
function removeItem(index){
  const array=[1,2,3,4]
  for (let i=0; i<array.length;i++){
    if (i==index) {
      array[index]=array[i+1]
      array.splice(index,1);
      
    }
  }
  return array;

}
console.log(removeItem(2));
//10-
function sumOfNumbers(number){
  let sum =0;
  for (let i = 0; i <=number; i++) {
    sum=sum+i;
    
    
  }
  return sum;
}
console.log(sumOfNumbers(5));
//11-
function sumOfOdds(number){
  let sum=0;
  for (let i = 0; i <=number; i++) {
    if (i%2!=0) {
      sum =sum+i;
      
    }
    
  }return sum;
}
console.log(sumOfOdds(12));
//12-
function sumOfEven(number){
  let sum=0;
  for (let i = 0; i <=number; i++) {
    if (i%2==0) {
      sum =sum+i;
      
    }
    
  }return sum;
}
console.log(sumOfEven(12));
//13-
function evensAndOdds(number){
  let odds=0;
  let evens=0;
  for (let i = 0; i < number; i++) {
    
    if (i%2===0) {
      evens++;
      
    } else {
      odds++;
    }
    
  }
  console.log(`The number of odds are ${odds}.`);
  console.log(`The number of evens are ${evens}.`);
}
evensAndOdds(100);
//LEVEL3
//12-
function sumOfArrayItems(array){
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return `Array are non-number types`;
    }
  }
  let sum = 0;
  for (let num of arr) {
    sum =sum+num;
  }
  return sum;
}
const array=[1,2,3,4];
console.log(sumOfArrayItems(array));
//14
function modifyArray(array) {
  if (array.length < 5) {
    return 'Items Not Found';
  }

  array[4] = array[4].toUpperCase();
  return array;
  
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
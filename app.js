//===========================>chapter NO 14-16 ======================================


// 1. Declare an empty array using JS literal notation to store student names in the future
let studentNamesLiteral = [];

// 2. Declare an empty array using JS object notation to store student names in the future
let studentNamesObject = new Array();

// 3. Declare and initialize a strings array
let stringsArray = ["Apple", "Banana", "Cherry"];

// 4. Declare and initialize a numbers array
let numbersArray = [10, 20, 30, 40, 50];

// 5. Declare and initialize a boolean array
let booleanArray = [true, false, true, false];

// 6. Declare and initialize a mixed array
let mixedArray = ["Text", 123, true, null];

// 7. Declare and initialize an array for education qualifications in Pakistan
let qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil",
  "PhD"
];

// Display the qualifications in the browser
document.write("<h1>Education Qualifications in Pakistan:</h1>");
document.write("<ul>");
for (let qualification of qualifications) {
  document.write(`<li>${qualification}</li>`);
}
document.write("</ul>");
// Store student scores in an array

let studentScores = [78, 45, 92, 60, 88, 35, 50];

// Sort the array in ascending order
studentScores.sort((a, b) => a - b);

// Display the sorted array in the browser
document.write("<h1>Sorted Student Scores in Ascending Order:</h1>");
document.write("<p>" + studentScores.join(", ") + "</p>");

// Initialize an array with city names
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Copy 3 elements from the 'cities' array to 'selectedCities' array
let selectedCities = cities.slice(1, 4); // Copy elements from index 1 to 3 (not including 4)

// Display the original and selected arrays in the browser
document.write("<h1>All Cities:</h1>");
document.write("<p>" + cities.join(", ") + "</p>");
document.write("<h1>Selected Cities:</h1>");
document.write("<p>" + selectedCities.join(", ") + "</p>");

// Initialize the array
var arr = ["This ", " is ", " my ", " phone"];

// Use the join method to create a single string
var singleString = arr.join("");

// Display the single string in the browser
document.write("<h1>Combined String:</h1>");
document.write("<p>" + singleString + "</p>");

//========================>ASSIGNMENT NO 4 DONE ========================>




  // let str = "huzaifa" ;
  // console.log(`${str[0].toUpperCase()}${str.slice(1)}`);
  

  let str = "huzaifa" ;
  document.write(`${str[0].toUpperCase()}${str.slice(1)}`);


  let arr1 = ["karachi","lahore","islamabad"];
  let last = arr1.pop();
  let frist = arr1.shift();

  arr1.unshift(last);
  arr1.push(frist);
  console.log(arr1);
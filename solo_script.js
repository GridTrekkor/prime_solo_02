// ! ! !
// Three Bugs

// Atticus,0.09,51230,4230
// Jem,0.06,67310,3810
// Boo,0.04,56160,2160
// Scout,0.13,84467,9717.5

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var MultiArray = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the MultiArray, extracting each MultiArray and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < MultiArray.length; i++){
	MultiArray[i] = calculateSTI(MultiArray[i]);   //// should be passing in an index of MultiArray /////////////////////////////
  //console.log(MultiArray[i]);
  newEl = document.createElement('li');
  MultiArray[i][1] = " " + MultiArray[i][1];    ////  add spaces before the indices 1,2,3 to clean up presentation
  MultiArray[i][2] = " " + MultiArray[i][2];
  MultiArray[i][3] = " " + MultiArray[i][3];
	newText = document.createTextNode(MultiArray[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(MultiArray){
  var newArray = [];

  newArray[0] = MultiArray[0];

  var employeeNumber = MultiArray[1];
  var baseSalary = MultiArray[2];
  var reviewScore = MultiArray[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));    //// need to round salary to nearest whole number /////////////////////////////
  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + ", " + newArray[1] + ", " + newArray[2] + ", " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;  //// was : return basePercent - 1; ///////////////////////////////////////////////////////////////////////////////////////
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}
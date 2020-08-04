// feetToMile


function feetToMile(input) {
  const feet = 5280;
  if (input < 0) {
    return "Unidentified";
  } 
  else {
    let mile = input / feet;
    return mile;
  }
}
let convert = feetToMile(6);
console.log("Your input feet = " + convert + " mile");


// woodCalculator


function woodCalculator(chair, table, bed) {
  if (chair <= 0 || table <= 0 || bed <= 0) {
    console.log("Pls input again, input can't be zero or negative figure");
  } 
  
  else {
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = woodForChair + woodForTable + woodForBed;
  }
  return totalWood;
}
var furniture = woodCalculator(2, 10, 5);
console.log("Total Wood Needed = ", furniture, "cubic feet");


// brickCalculator


function brickCalculator(buildingFloor) {
  var firstTenFloor = 15;
  var elevenToTwenty = 12;
  var twentyOneAbove = 10;
  if (buildingFloor < 0 || buildingFloor == 0) {
    console.log("Pls try again, input can't be zero or negative figure");
  } 
  
  else if (buildingFloor <= 10) {
    var totalBricks = buildingFloor * 1000;
  } 
  
  else if (buildingFloor <= 20) {
    firstTenFloor = firstTenFloor * 10;
    elevenToTwenty = buildingFloor - 10;
    buildingFloor = firstTenFloor + elevenToTwenty * 12;
    var totalBricks = buildingFloor * 1000;
  } 
  
  else {
    firstTenFloor = firstTenFloor * 10;
    elevenToTwenty = elevenToTwenty * 10;
    twentyOneAbove = buildingFloor - 20;
    buildingFloor = firstTenFloor + elevenToTwenty + twentyOneAbove * 10;
    var totalBricks = buildingFloor * 1000;
  }
  return totalBricks;
}
var totalBreakCount = brickCalculator(25);
console.log("Total need =", totalBreakCount, " Bricks ");


// tinyFriend


function tinyFriend(names) {
  var shortest = names[0];

  for (var i = 0; i < names.length; i++) {
    var currentName = names[i];
    if (currentName.length < shortest.length) {
      shortest = currentName;
    }
  }
  return shortest;
}

var shortestNameFriend = tinyFriend(["Nazmul", "Haider", "Nakib", "Mitul", "Babu"]);
console.log("Your Tiny Friends Name is : ", shortestNameFriend);

 




// Sort the numbers in descending order (10, 9, 8, 7, etc).
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var sum = 0;
// var reformattedArray = kvArray.map(function(obj){ 
//    var rObj = {};
//    rObj[obj.key] = obj.value;
//    return rObj;
// });
var a = integers.sort(function(a,b){ 
    return b - a;
}).filter(function(number){
  	if (number > 19) {
  		console.log(number)
	  	return number;
	}
}).map(function(integers){
     return integers * 1.5 + 1;
 }).map(function(integers){
 	sum += integers;
 	return integers;
 })

console.log("final: ", a);
console.log("sum", sum);




//console.log("integers =",integers);



// Multiply each remaining number by 1.5 and then subtract 1.
// var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// var integers = integers

//console.log("map =", integers); 


// Then output (either in the DOM or the console) the sum of all the resulting numbers.

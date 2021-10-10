var stringArray = ["first", "second"];

myArray.forEach((string, index) => {
  	var msg = "The string: " + string + " is in index of " + index; 
	console.log(msg);
	
	// Output:
	// The string: first is in index of 0
	// The string: second is in index of 1
});
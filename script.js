function toCase(text) {
  let arr = []
	arr.push(text.toLowerCase(),"-",text.toUpperCase())
	return arr.join("")
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

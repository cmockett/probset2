// var firstReverse = function(str){
// 	var myArray = str.split("")
// 	var newArray = []
// 	for (var i =myArray.length; i >=0; i--){
// 		newArray.push(myArray[i])
// 	}
// 		return newArray.join("")

// }

var swapCase = function(str){
	// var myArray = str.split("")
	// var newArray = []

	for (var i =0; i<str.length; i++){
		if (str[i] === str[i].toUpperCase()){
			str[i] = str[i].toLowerCase()
		} else if (str[i] === str[i].toLowerCase()) {
			str[i]= str[i].toUpperCase()

		}
	}
	return str
}
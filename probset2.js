// var firstReverse = function(str){
// 	var myArray = str.split("")
// 	var newArray = []
// 	for (var i =myArray.length; i >=0; i--){
// 		newArray.push(myArray[i])
// 	}
// 		return newArray.join("")

// }

// var swapCase = function(str){
// 	var myArray = str.split("")
// 	// var newArray = []

// 	for (var i =0; i<str.length; i++){
// 		if (myArray[i] === myArray[i].toUpperCase()){
// 			myArray[i] = myArray[i].toLowerCase()
// 		} else if (myArray[i] === myArray[i].toLowerCase()) {
// 			myArray[i]= myArray[i].toUpperCase()
// 		}
// 	}
// 	return myArray.join("")
// }

// var letterCount = function (str){
// 	var count = 0
// 	var wordArray = str.split(" ")
// 	for(var i =0; i<wordArray.length; i++){
// 		var letterArray= wordArray[i].split("")
// 		// var word = wordArray[i]
// 		// for(var j =0; j<word.length; j++)
// 		// 	var letter=word[j];
// 		// 	for 

// console.log(letterArray)
// 	}
// console.log(wordArray)
// }


// var letterCount = function (str){
	
// 	str = str.toLowerCase()
// 	var strObject = {}
// 	var wordArray = str.split(" ")
// 	for (var i =0; i<wordArray.length; i++){
// 		var letterArray=wordArray[i].split("")
// 		var letterCheck = function (i){
// 		for (var j=0; j<letterArray.length; j++){
// 		strObject[letterArray[j]]=0;
// 	}
// 	}
// 	letterCheck()
// }

// 		console.log(strObject)
// 		console.log(letterArray)
// 		console.log(wordArray)
// }
// https://teamtreehouse.com/community/how-to-count-the-number-of-times-a-specific-character-appears-in-a-string

// var letterCount = function(str){
// 	var wordArray = str.split(" ")
// 	// wordArray.forEach()
// 	// str.match(/str[i]/).length
// 	console.log(wordArray)
// }

var letterCount = function(str){
	var wordArray = str.split(" ");
	var letterCountArray = []
	for (var i=0; i<wordArray.length; i++){
		var letterCountObject = {};
		for (var j=0; j<wordArray[i].length; j++){
			if(!letterCountObject[ wordArray[i][j] ]){
				letterCountObject[wordArray[i][j]]=0;
			}
			letterCountObject[wordArray[i][j]]++
		}
		letterCountArray.push(letterCountObject)
	}
		var charCountArray = []
	for (var i=0; i<letterCountArray.length; i++){
		var repeated = 0
		for (var character in letterCountArray[i]){
			if(letterCountArray[i][character]>1){
				repeated++
			}
		}
		charCountArray.push(repeated)
	}
	var winningIndex=-1
	var max=0
	for(var i=0; i<charCountArray.length;i++){
		if(charCountArray[i]>max){
			max=charCountArray[i]
			winningIndex=i
		}
	}
	return winningIndex === -1 ? winningIndex : wordArray[winningIndex]	
}


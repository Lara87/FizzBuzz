var number = Math.floor(Math.random() * (100 - 1 + 1));

if((number%3)&&(number%5)){
	console.log("FIZZBUZZ")
}
	else if(number%3){
		console.log("FIZZ")
	}
		else if (number%5){
			console.log("BUZZ")
		}
			else {console.log(number);
			}
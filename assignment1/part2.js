#!/usr/bin/env node
fs = require('fs');
var outfile = "100prime.txt";

function isPrime(num) {
	var result = true;
	if (num != 2 && num % 2 == 0) {
		result = false;
	}
	for (i = 3; i <= Math.sqrt(num); i+=2) {
		if (num % i == 0) {
			result = false;
			break;
		}
	}
	return result
}

primes = [];
number = 2;
do {
	if (isPrime(number)) {
		primes.push(number)
	}
	number++;
}
while (primes.length < 100);

out = ""
for (i = 0; i < primes.length; i++) {
	if (i < (primes.length - 1)){
		out += primes[i] + ",";
	}
	else {
		out += primes[i];
	}
}

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

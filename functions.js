// Exercise 1
// The Fortune Teller

function tellFortune(jobTitle, location, partner, numberOfChildren) {
    return `You will be a ${jobTitle} in ${location}, and married to ${partners} with ${numberOfChildren} kids.`;
}

console.log(tellFortune("Software Engineer", "Wien", "Anna", 1));

function tellFortune2(person) {
    return `You will be a ${person.jobTitle} in ${person.location}, and married to ${person.partner} with ${person.numberOfChildren} kids.`;
}

console.log(tellFortune2({
    jobTitle: "Space Pizza Delivery",
    location: "New New York",
    partner: "Leila",
    numberOfChildren: 2
}));




function toTitleCase(sentence) {

    let lowercaseSentence = sentence.toLowerCase()
    let sentenceAsWordArray = lowercaseSentence.splsit(" ");
    let titleCasedSentence = "";

    for (var wordPosition = 1; wordPosition < sentenceAsWordArray.length; wordPosition++) {
        let word = sentenceAsWordArray[wordPosition]
        titleCasedSentence += " " + word.charAt(0).toUpperCase() + word.substring(1);
    }

    return titleCasedSentence;
}

function toTitleCase2(sentence) {
    return sentence
        .toLowerCase()
        .split("")
        .reduce(function (previous, char, position, charArray) {
            return previous + (
                previous == " " || charArray[position - 1] === " "
                    ? char.toUpperCase()
                    : char
            );
        }, " ");
}

function toTitleCase3(sentence) {

    let lowercaseSentence = sentence.toLowerCase()
    let sentenceAsCharArray = lowercaseSentence.split("");
    let titleCasedSentence = "";

    for (var charPosition = 0; charPosition < sentenceAsCharArray.length; charPosition++) {
        let previousChar = sentenceAsCharArray[charPosition - 1]
        let char = sentenceAsCharArray[charPosition]

        if (!previousChar || previousChar === " ") {
            titleCasedSentence += char.toUpperCase()
        } else {
            titleCasedSentence += char;
        }
    }

    return titleCasedSentence;
}

console.log(toTitleCase("The qUick brOWN fox jumPsdadasS OVer the LAZY dog"));
console.log(toTitleCase2("The qUick brOWN fox jumPS OVer the LAZY dog"));
console.log(toTitleCase3("The qUick brOWN fox jumPS OVer the LAZY dog"));


// Exercise 4
// Check if a number is perfect, the sum of it's divisors is equal to the number itself

function isNumberPerfect(number) {
    let sumOfDivisors = 0

    for (var potentialDivisor = 1; potentialDivisor < number; potentialDivisor++) {
        if (number % potentialDivisor == 0) {
            sumOfDivisors += potentialDivisor;
        }

        if (sumOfDivisors == number && sumOfDivisors + number == 2 * number) {
            return true;
        }
    }

    return false;
}

console.log(isNumberPerfect(65));

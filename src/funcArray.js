/* Encuentra el máximo */
export function maxOfTwoNumbers(num1, num2) {
    if (num1>num2) {
        return num1;
    }
    if (num1<num2) {
        return num2;
    } 
    if (num1==num2){
        return num1;
    }
    }


export function findLongestWord(array){
    //let words = ['mystery','brother','aviator','crocodile','pearl','orchard','crackpot'];
    let longestWord = '';
    array.map(function(word){
        if(word.length > longestWord.length) {
            longestWord=word;
        }
    })
    return longestWord;
}
words = ['mystery','brother','aviator','crocodile','pearl','orchard','crackpot'];
console.log(findLongestWord(words));




export function sumArray(numbersArray){
    //const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
    let total = 0;
    for (let number of numbersArray) {
        total += number;
    }
    return total;
}

export function averageNumbers(){}
export function averageWordLength(){}
export function uniquifyArray(){}
export function doesWordExist(){} 
export function howManyTimes(){}
export function greatestProduct(){}






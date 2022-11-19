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
let words = ['mystery','brother','aviator','crocodile','pearl','orchard','crackpot'];
console.log(findLongestWord(words));




export function sumArray(array){
    //const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
    let total = 0;
    for (let number of array) {
        total += number;
    }
    return total;
}
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
console.log(sumArray(numbers));


export function averageNumbers(array){
    const total = array.reduce((accumulator, item) => accumulator + item);
    return total/array.length;
}
let numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numbers2));


export function averageWordLength(array){
    const totalWordLength = array.reduce((accumulator, item) => accumulator + item);
    // averageWordLength = (totalWordLength/array.length).length;
    return totalWordLength.length/array.length;
}
let words2= ['seat','correspond','linen','motif','hole','smell','smart','chaos','fuel','palace'];
console.log(averageWordLength(words2))


// export function uniquifyArray(array){
//     let uniqueWords = array.filter((word, index) => {
//         return array.indexOf(word)===index;
//     });
//     return uniqueWords;
// }
// let words3 = ['crab','poison','contagious','simple','bring','sharp','playground','poison','communion','simple','bring'];
// console.log(uniquifyArray(words3));

export function uniquifyArray(array){
    let uniqueWords=[];
    let i;
    for (i=0; i<array.length; i++){
        if(uniqueWords.indexOf(array[i])===-1){
            uniqueWords.push(array[i]);
        }}
    return uniqueWords;   
} 
let words3 = ['crab','poison','contagious','simple','bring','sharp','playground','poison','communion','simple','bring'];
console.log(uniquifyArray(words3));



export function doesWordExist(array, word){
    return array.includes(word)} 

let words4 = ['machine','subset','trouble','starting','matter','eating','truth','disobedience'];
console.log(doesWordExist(words4, 'machine'));


export function howManyTimes(){}
export function greatestProduct(){}






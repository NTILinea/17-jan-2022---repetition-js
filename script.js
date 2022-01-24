/* DATATYPER*/
// OCKSÅ DATATYPER
/*
let
const
var
*/

//let och const only stays inside codeblock whilie var can be acced outside the code block
{
    let name = "Johan"
}
console.log(name)

let string = "hello, i'm a string";
let numb = 1234.897865;
let boolean = true || false;
let n = null;
let uf = undefined; //Ann Dey Fiend

/*functioner */
function name() {

}

name() //anropar functionen

let myFunc = function() {

} // can bara användas när den är declaerad innan den anropas

//() => {} //förkortning och används inom 

function add(numb1 = 0, numb2 = 0) {
    console.log(numb1+numb2);
};

add(12);

function add2(numb1 = 0, numb2 = 0) {
    return numb1 + numb2;
};

let answer = add2(12);
console.log(answer);

//Datastrukturer
let arr = ['kiwi', 'orange', 'pear', 'apple'];
let crazyArr = [true, () => {}, [], {}, 'keso'];

arr.push('pineapple')

//arr.pop(); //removes the last array
arr.splice(0, 1, 'melon'); //0 = postionen, 1 = hur många från start punkten byta ut
console.log(arr);

//filter
let sumbers = [123,424,234,5,1,453,34,5,4,16,6,3,146,63,631,6,];
let b = sumbers.filter((num) => {return num > 20 && num < 100});

let c = sumbers.sort((a,b) => {return a - b})
console.log(c);

let dicegame = {
    sides: 6,
    sumberOfThrows: 1000,
    totalValue: 0,
    throw (){
        return Math.ceil(Math.random()*this.sides);
    },
    init(){
        for(i=0; i<this.sumberOfThrows; i++){
            let value = this.throw();
            console.log(value);

            this.totalValue += value;
        }
        console.log(this.totalValue);
    }
};
dicegame.init();

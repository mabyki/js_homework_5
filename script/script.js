console.log('========== 1 ===========');

function arif(a, b, c){
    let o = (a - b) / c;
    console.log(c);
}

arif (10, 6, 2);

console.log('========== 2 ===========');

function arif2(a) {
    let sqr = a * a;
    let cube = a * a * a;
    return  console.log('Квадрат ' + sqr), console.log('Куб ' + cube);
}

arif2(2)

console.log('========== 3 ===========');

function minMax(a, b) {
    min = (a < b)? a: b;
    max = (a > b)? a: b;
    return console.log('Макс ' + max), console.log('Мин ' + min)
}

minMax(10, 25);

console.log('========== 4 ===========');

let arr = [];
function getArray(a, b){
    
    for(let i = a; i <= b; i++){
        arr.push(i);
    }
    for(let i = a; i >= b; i--){
        arr.push(i);
    }
    
    return arr;
}

getArray(2, 100);

function writeArray(){
    console.log(arr)
}

writeArray()

console.log('========== 5 ===========');

function isEven(a){
    
    if(a % 2 == 0){
        return true;
    }else{
        return false;
    }
}

isEven(17)

console.log(isEven(17));

console.log('========== 6 ===========');

/*
let newArray = []
function evenArray(arr){
    for(let i = 0; i < arr.lenght; i++){
        if(isEven(arr[i]) == true){
            newArray.push(arr[i]);
    }

    }
    console.log(newArray());
}

evenArray()
*/

console.log('========== 7 ===========');

function piramid(a,b){
    let str = '';
    for(let i = 1; i <= a; i++){
        for(let j = 1; j <= i; j++){
            if(b === undefined){
                str += i;
            }else{
                str += b;
            }
        }
        console.log(str)
        str = '';
    }
}

piramid(9)
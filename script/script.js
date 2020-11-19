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

function getArray(a, b){
    let arr = [];
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
    console.log(getArray(2,100))
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

console.log(isEven(17));

console.log('========== 6 ===========');


function evenArray(a){
    let newArray = [];
    for(let i = 0; i < a.length; i++){
        if(isEven(a[i]) == true){
            newArray.push(a[i]);
        }
    }
    return newArray;
}
let arr1 = [1,2,3,4,5,6,7,8,9,55,12,15,16];
console.log(evenArray(arr1));


console.log('========== 7 ===========');

function piramid(a){
    let str = '';
    for(let i = 1; i <= a; i++){
        for(let j = 1; j <= i; j++){
            if(arguments[1] === undefined){
                str += i;
            }else{
                str += arguments[1];
            }
        }
        console.log(str)
        str = '';
    }
}

piramid(9)

document.write('========== 8 ===========');

function piramid2(height){
for(let i = 0; i <= height; i++){
    for(let j = 0; j < height - i; j++){
        document.write('&ensp;');
    }
    for(let k = 0; k < 2*i-1; k++){
        document.write('*');
    }
    document.write('<br>');
}
}
piramid2(25)

document.write('<br>');

function piramidRevers(height){
    for(let i = height; i > 0; i--){
        for(let j = 0; j < height - i; j++){
            document.write('&ensp;');
        }
        for(let k = 0; k < 2*i-1; k++){
            document.write('*');
        }
        document.write('<br>');
    }
    }
piramidRevers(15)

console.log('========== 9 ===========');

function fib(f){
    let arrFib = [];
    if(f <= 1){
        return f;
    }else{
        return fib(f - 1) + fib(f - 2);
    }
}

console.log(fib(7));

function fib1(n){
    let a = 0,
        b = 1,
        arrFib1 = [];
        for(let i = 0; i <= n; i++){
            if(i === 0){
                a = 0;
            }else{
            a = a + b;
            b = a - b;
            }
            if(a < 1000){
                arrFib1.push(a);
            }
        }
    return arrFib1;
}

console.log(fib1(17))


console.log('========== 10 ===========');


function arif3(a){
    let str = String(a),
        sum = 0;
    for(let i = 0; i < str.length; i++){
        sum += +str[i];
    }
    if(sum > 9){
        return arif3(sum);
    }else{
        return sum;
    }
}

console.log(arif3(3451111))





    
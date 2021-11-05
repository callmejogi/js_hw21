// Task 1
// function getFactorial(n){
//     if(n === 1 || n === 0){
//         return 1;
//     }else{
//         return n * getFactorial(n - 1);
//     }

// }

// console.log(getFactorial(4));

// Task 2
// function pow(num,degree){
//     if (degree === 1 ){
//         return num;
//     }else{
//         return num * pow(num, degree - 1);
//     }
// }

// console.log(pow(2,4));

// Task 3

function sum(a,b){
    if(b === 0) return a;
    a++;
    return sum(a,b-1);
}


console.log(sum(300,42))

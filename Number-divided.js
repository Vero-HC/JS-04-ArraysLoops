console.log("NÚMERO DIVIDIDO EN MITADES");

const n = 4;
const n2 = 10;

function numDiv(num){
    let res = [];
    const half = num/2;
    res.push(half);
    res.push (half);
    return res;
}
console.log(numDiv(n));

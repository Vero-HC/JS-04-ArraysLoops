console.log("SUMA DE RESISTENCIAS EN SERIE");

const res1 = [-1, 5, 6, 3];
const res2 = [14, 2.5, 6];
const res3 = [8, 15, 100];

function sumRes(arr){
    const arr2 = [];
    arr.forEach((e) => arr2.push(Math.abs(e)));
    let res = 0;
    arr2.forEach((e) => (res = res + e));
    console.log(`${res} ohms`);
}
console.log(res1);
sumRes(res1);
console.log(res2);
sumRes(res2);
console.log(res3);
sumRes(res3);
console.log("ESTADO EN LÍNEA");

const users = ["mockIng99", "J0eyPunch", "glassedFer"];

function displayUsers(arr){
    const count = users.length;
    let res;
    if (count === 1){
        res = `${arr[0]} is online`;
    } else if (count === 2){
        res = `${arr[0]}, ${arr[1]} are online`;
    } else {
        res = `${arr[0]}, ${arr[1]} and ${count-2} more are online`;
    }
    return res;
}
console.log(displayUsers(users));
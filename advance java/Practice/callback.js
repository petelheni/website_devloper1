function addition(x, y, result) {
    console.log(`value of ${x} and ${y}`)
    result
}
function res(z) {
    console.log(`value of : ${z}`);
}
// console.log(res());
// 3rd parameter is function which is called as argument in addition function
addition(5, 4, res(9));
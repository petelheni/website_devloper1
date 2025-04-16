const msg = () => {
    var a = "Hello"

    return function () {
        // inner function access outer function variable
        console.log(a);
    }
}
msg()();

const msg1 = () => {
    var b = "hello"
    return function () {

        console.log(b);
    }
}
msg()();


const add = (() => {
    var b = 15;
    return function () {
        if (b <= 10) {
            b++;
        } else {
            b;
        }
        console.log(b);
    }
})();
add()
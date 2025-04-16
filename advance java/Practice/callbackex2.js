function hello(hi) {
    return `hi!,`
    hi
}
function welcomemsg(msg, name, wc) {
    return `${wc} ${name}, welcome to our ${msg}`
}
// console.log(hello(), welcomemsg('new home', 'suraj'));

// call this function as callback
console.log(welcomemsg('new home', 'suraj', hello()));
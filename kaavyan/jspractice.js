//Call backs
function first(callback) {
    console.log("1");
    callback();
}
function callback() {
    console.log("2");
}
first();
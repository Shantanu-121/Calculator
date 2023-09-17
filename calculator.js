$("span").fadeOut(1000).fadeIn(1000);
$("img").fadeOut(1000).fadeIn(2000);
$(".container").fadeOut(1000).fadeIn(3000);
var inputBox = document.querySelector("input");
var inputValue = 0;
var inputValue1 = 0;
var inputOperation = 0;
var inputResult = 0;
$(".number").click(function (e) {
    inputValue = e.target.id;
    inputBox.value = inputBox.value + inputValue;
});
$(".sign").click(function (e) {
    inputValue1 = inputBox.value;
    inputBox.value = null;
    inputOperation = e.target.id;
});
$(".equals").click(function () {
    if (inputOperation === "*") {
        inputResult = Number(inputValue1) * Number(inputBox.value);
        inputBox.value = inputResult;
    }
    if (inputOperation === "/") {
        inputResult = Number(inputValue1) / Number(inputBox.value);
        inputBox.value = inputResult;
    }
    if (inputOperation === "+") {
        inputResult = Number(inputValue1) + Number(inputBox.value);
        inputBox.value = inputResult;
    }
    if (inputOperation === "-") {
        inputResult = Number(inputValue1) - Number(inputBox.value);
        inputBox.value = inputResult;
    }
    if (inputOperation === "%") {
        inputResult = Number(inputValue1) % Number(inputBox.value);
        inputBox.value = inputResult;
    }
});
$(".clear").click(function () {
    inputValue = 0;
    inputValue1 = 0;
    inputOperation = 0;
    inputResult = 0;
    inputBox.value = null;
});
$(".point").click(function () {
    inputBox.value = Number(inputBox.value) + ".";
});
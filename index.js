
const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
}
document.getElementById("btn").addEventListener(
    "click",
    getColor)
getColor();

document.getElementById("btn2").addEventListener(
    "click",
    getColor)
getColor();
document.getElementById("btn3").addEventListener(
    "click",
    getColor)
getColor(); 
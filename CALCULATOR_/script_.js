const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let clickCount = 0;
let clickColors = ["#000", "#273678", "#150d40"];
let clickColor = clickColors[0];

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == "clear") {
            display.innerText = "";
        } else if (item.id == "backspace") {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != "" && item.id == "equal") {
            let expression = display.innerText.replace(/÷/g, '/').replace(/×/g, '*');
            expression = expression.replace(/%/g, '/100');
            display.innerText = eval(expression);
        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        } else if (item.id == "percent") {
            display.innerHTML += "<span>%</span>";
        } else if (item.id == "dot") {
            display.innerText += ".";
        } else if (["greater-than", "less-than"].includes(item.id)) {
            display.innerText += item.innerText;
        } else {
            display.innerText += item.id.replace('multiply', '×');
        }

        clickColor = clickColors[clickCount % clickColors.length];
        document.querySelector(".calculator").style.backgroundColor = clickColor;

        // Check if the background color is white, then set text color to black
        if (clickColor === "#f8fafd") {
            display.style.color = "#000";
        } else {
            display.style.color = "#fff"; // Set to white or any other color if not white
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".dark");

themeToggleBtn.onclick = () => {
    clickCount++;

    if (clickCount >= clickColors.length) {
        clickCount = 0;
    }

    clickColor = clickColors[clickCount];
    calculator.style.backgroundColor = clickColor;

    // Check if the background color is white, then set text color to black
    if (clickColor === "#f8fafd") {
        display.style.color = "#000";
    } else {
        display.style.color = "#fff"; // Set to white or any other color if not white
    }
};

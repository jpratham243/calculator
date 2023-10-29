// Get the input field and buttons
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Add a click event listener to each button
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                string = evaluateExpression(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
            }
        } else if (buttonValue === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonValue === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += buttonValue;
            input.value = string;
        }
    });
});

// Function to safely evaluate the expression
function evaluateExpression(expression) {
    return new Function('return ' + expression)();
}

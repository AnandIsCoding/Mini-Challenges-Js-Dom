let money = document.querySelector("#money");
let tipbtn = document.getElementsByTagName("button");
let customtip = document.querySelector('#customtip');
let numberofpeople = document.querySelector('#numberofpeople');
let calculate = document.querySelector('#calculate');
let totalamountvalue = document.querySelector('#totalamountvalue');
let tipamountvalue = document.querySelector('#tipamountvalue');
let eachpersonvalue = document.querySelector('#eachpersonvalue');

// Enable buttons when bill amount is entered
money.addEventListener('input', () => {
    if (money.value != '') {
        Array.from(tipbtn).forEach(element => {
            element.disabled = false;
            element.style.cursor = 'pointer';
        });
        customtip.disabled = false;
        numberofpeople.disabled = false;
    }
});

// Enable calculate button when all required fields are filled
function checkCalculateButton() {
    if (money.value && numberofpeople.value && (customtip.value || Array.from(tipbtn).some(button => !button.disabled))) {
        calculate.disabled = false;
    } else {
        calculate.disabled = true;
    }
}

money.addEventListener('input', checkCalculateButton);
numberofpeople.addEventListener('input', checkCalculateButton);
customtip.addEventListener('input', checkCalculateButton);

let tipvalue = 0;

// Set tip value based on button selection
Array.from(tipbtn).forEach(element => {
    element.addEventListener('click', () => {
        tipvalue = element.value;
        Array.from(tipbtn).forEach(button => button.disabled = true);
        customtip.disabled = false;
        customtip.value = ''; // Clear the custom tip if a preset tip is selected
        checkCalculateButton(); // Recheck if calculate can be enabled
    });
});

// Handle calculation
calculate.addEventListener('click', () => {
    // If custom tip is used, update the tip value
    if (customtip.value) {
        tipvalue = customtip.value;
    }

    // Calculate total, tip amount, and each person amount
    let totalTip = (parseFloat(money.value) * parseFloat(tipvalue)) / 100;
    let totalAmount = parseFloat(money.value) + totalTip;
    let eachPersonAmount = numberofpeople.value != 0 ? totalAmount / parseInt(numberofpeople.value) : 0;

    // Display the results
    tipamountvalue.innerText = `₹${totalTip.toFixed(2)}`;
    totalamountvalue.innerText = `₹${totalAmount.toFixed(2)}`;
    eachpersonvalue.innerText = `₹${eachPersonAmount.toFixed(2)}`;
});

// Optional: Add reset functionality
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    money.value = '';
    numberofpeople.value = '';
    customtip.value = '';
    Array.from(tipbtn).forEach(button => button.disabled = false);
    resetButton.disabled = true;
    totalamountvalue.innerText = '';
    tipamountvalue.innerText = '';
    eachpersonvalue.innerText = '';
    checkCalculateButton(); // Recheck if calculate should be disabled
});

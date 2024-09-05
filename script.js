function generatePassword() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!#@$&*()";

    let letterCount = document.getElementById("letters").value;
    let numberCount = document.getElementById("numbers").value;
    let symbolCount = document.getElementById("symbols").value;

    let password = [];
    
    for (let i = 0; i < letterCount; i++) {
        password.push(letters[Math.floor(Math.random() * letters.length)]);
    }

    for (let i = 0; i < numberCount; i++) {
        password.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    for (let i = 0; i < symbolCount; i++) {
        password.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    // Shuffle password
    password = password.sort(() => Math.random() - 0.5);

    // Display the password
    document.getElementById("passwordOutput").textContent = password.join('');
}

function openTab(evt, tabName) {
    var i, tabContent, tabButtons;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove "active" class from all tab buttons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Show the current tab and add "active" class to the button that opened it
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the first tab as active by default
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementsByClassName('tab-button')[0].click();
});
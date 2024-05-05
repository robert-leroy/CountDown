// your-script.js
function calculateDaysUntilApril1() {
    const today = new Date();
    const april1 = new Date(2025, 3, 1); // April 1, 2025

    // Calculate the difference in milliseconds
    const timeDifference = april1.getTime() - today.getTime();

    // Convert milliseconds to days
    const daysUntilApril1 = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Display the result
    document.getElementById("result").textContent = `Days until April 1, 2025: ${daysUntilApril1}`;

    // Convert daysUntilApril1 to an array of digits
    

    // Get the components of the daysUntilApril1
    const hundreds = Math.trunc(daysUntilApril1 / 100);
    const days = daysUntilApril1 - (hundreds * 100);
    const tens = Math.trunc(days / 10);
    const ones = days - (tens * 10);
    
    console.log(`Hundreds: ${hundreds}, Tens: ${tens}, Ones: ${ones}, Days: ${days}, April 5: ${daysUntilApril1}`);

    document.getElementById("led0").src = `./lcd/led-${hundreds}.png`;
    document.getElementById("led1").src = `./lcd/led-${tens}.png`;
    document.getElementById("led2").src = `./lcd/led-${ones}.png`;
}

// Call the function when the page loads
window.onload = calculateDaysUntilApril1;

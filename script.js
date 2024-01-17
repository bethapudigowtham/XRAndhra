document.addEventListener('DOMContentLoaded', () => {
    console.log("Website loaded!");
    // You can add more interactive JavaScript code here
});
document.addEventListener('DOMContentLoaded', () => {
    // Example: Log each feature to the console
    document.querySelectorAll('#features article').forEach((feature, index) => {
        console.log('Feature ' + (index + 1) + ': ' + feature.querySelector('h3').innerText);
    });

    // Additional interactive JavaScript can be added here
});

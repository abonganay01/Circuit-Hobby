// This file contains the JavaScript code for the CircuitHobby tech blog site.
// It handles interactivity, such as event listeners and dynamic content updates.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to CircuitHobby!');

    // Example: Add event listener for a button click
    const exampleButton = document.getElementById('exampleButton');
    if (exampleButton) {
        exampleButton.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }

    // Toggle dark mode feature
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌙 Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '24px';
    darkModeToggle.style.right = '24px';
    darkModeToggle.style.padding = '10px 18px';
    darkModeToggle.style.borderRadius = '20px';
    darkModeToggle.style.background = '#35424a';
    darkModeToggle.style.color = '#ffd600';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.fontWeight = 'bold';
    darkModeToggle.style.cursor = 'pointer';
    darkModeToggle.style.zIndex = '1000';

    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = '☀️ Light Mode';
        } else {
            darkModeToggle.textContent = '🌙 Dark Mode';
        }
    });
});
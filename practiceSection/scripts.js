// Select all language items
const languageItems = document.querySelectorAll('.language-item');

// Add click event listeners to each language item
languageItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Get the selected language name
        const selectedLanguage = item.getAttribute('data-language');

        // Perform actions based on the selected language
        console.log(`You selected: ${selectedLanguage}`); // Log the selected language

        // Example: Redirect to a specific page (uncomment below if needed)
        // window.location.href = `/practice-tests/${selectedLanguage.toLowerCase()}`;

        // Example: Display detailed information (expandable functionality)
        alert(`Loading quizzes for ${selectedLanguage}!`);
    });
});

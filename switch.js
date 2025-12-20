// A sample list of countries (you would have the full list here or fetch from an API)
const countries = ["USA", "Canada", "India", "UK", "Australia"];

// Function to populate the dropdown
function populateCountries() {
    const selectElement = document.getElementById("country-select");
    
    // Add a default, disabled option
    let defaultOption = document.createElement('option');
    defaultOption.text = '-- Select a Country --';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selectElement.add(defaultOption);

    // Loop through the countries array and add them as options
    countries.forEach(country => {
        const option = document.createElement("option");
        option.value = country;
        option.text = country;
        selectElement.add(option);
    });
}

// Call the function when the page loads
window.onload = populateCountries; //

function switchCountry() {
    var selectElement = document.getElementById("country-select");
    var selectedUrl = selectElement.value;

    // Redirect the user to the selected URL
    if (selectedUrl) {
        window.location.href = selectedUrl;
    }
}

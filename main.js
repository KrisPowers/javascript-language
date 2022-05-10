
// Getting the Language
console.log("We are searching for your default computer language...")
var language = window.navigator.userLanguage || window.navigator.language; // This part of the program searches for the language.
console.log("Location found and logged...")

// Web URL and Language List
var url = "example.com"; // Place the URL to your website here.
var list = ["en-US","es-ES","it-IT"] // Make changes to the lsit depending on the languages you support on your website.
var lsit = JSON.parse(`${url}/languages.json`); // Make changes to the lsit (languages.json) depending on the languages you support on your website.

window.location.replace(`https://${url}/${language}`); // This redirects the persons google url to the language detected.

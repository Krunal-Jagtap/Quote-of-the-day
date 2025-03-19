const quote = document.getElementById("QUOTE"); // Access
const author = document.getElementById("AUTHOR"); // Access

const url = "https://api.freeapi.app/api/v1/public/quotes/quote/random"; // Random Quote API

async function getQuote(url) {
  const response = await fetch(url); // Get data
  const data = await response.json(); // Load Json data
  quote.innerHTML = data.data.content; // Showing Quote
  author.innerHTML = data.data.author; // Showing Author
}
getQuote(url); // Call Function

// Open X
function tweet() {
  window.open(`https://twitter.com/intent/tweet?text=${quote}`);
}

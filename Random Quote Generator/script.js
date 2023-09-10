const text = document.querySelector("#text");
const author = document.querySelector("#author");
const btn = document.querySelector("#new-quote-btn");

btn.addEventListener("click", getQuote);

function getQuote() {
    fetch("https://type.fit/api/quotes")
        .then(response => response.json()) 
        .then(data => {
        
            const randomIndex = Math.floor(Math.random() * data.length);
            const quoteData = data[randomIndex];
            const quoteText = quoteData.text;
            
           
            let quoteAuthor = quoteData.author || "Unknown"; 
            quoteAuthor = quoteAuthor.replace(", type.fit", ""); 
            
            
            text.textContent = quoteText;
            author.textContent = `— ${quoteAuthor}`;
        })
        .catch(error => console.error("Error fetching quote:", error));
}



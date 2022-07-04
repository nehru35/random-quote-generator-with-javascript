const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author .name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");


function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    
    // fetching random quotes/data from API and 
    //parsing it into javascript object
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
};

soundBtn.addEventListener("click", () => {
    // the SpeechSynthesisUtterance is a web speech 
    //API that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    // speak method of SpeechSynthesis speak the Utterance
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
    // copying the quote text on copyBtn click
    // writeText() method writes  the especified 
    //text string to the system clipboard.
    navigator.clipboard.writeText(`${quoteText.innerText} \n- ${authorName.innerText}`);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText} \n- ${authorName.innerText}`;
    // Opening a new twitter tab with quote in the url 
    window.open(tweetUrl, "_blank");
});

quoteBtn.addEventListener('click', randomQuote);
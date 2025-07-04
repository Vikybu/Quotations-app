const btnSubmit = document.getElementById('btn-submit')
const divQuoteList = document.getElementById('quote-list')
 

btnSubmit.addEventListener('click', addQuote)

// Ajout de la citation et de l'auteur 
function addQuote(quote, author){
    const quoteP = document.createElement('p')
    quoteP.className = 'text'
    quoteP.innerText = document.getElementById('quote-entry').value 
    console.log(quote)

    const authorP = document.createElement('p')
    authorP.className = 'text'
    authorP.innerText = document.getElementById('author-name').value 
    console.log(author)

    const divQuote = document.createElement('div')
    divQuote.className = 'quote'

    divQuote.appendChild(quoteP)
    divQuote.appendChild(authorP)
    divQuoteList.appendChild(divQuote)
}
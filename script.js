const btnSubmit = document.getElementById('btn-submit')
const divQuoteList = document.getElementById('quote-list')
const inputQuote = document.getElementById('quote-entry')
const inputAuthor = document.getElementById('author-name')

let quoteCount = 1
let citationStorage = localStorage

btnSubmit.addEventListener('click', addQuote)

// Ajout de la citation et de l'auteur 
function addQuote(){
    const quoteP = document.createElement('p')
    quoteP.className = 'text'
    quoteP.innerText = document.getElementById('quote-entry').value 

    const authorP = document.createElement('p')
    authorP.className = 'author'
    authorP.innerText = document.getElementById('author-name').value 

    const divQuote = document.createElement('div')
    divQuote.className = 'quote'

    divQuote.appendChild(quoteP)
    divQuote.appendChild(authorP)
    divQuoteList.appendChild(divQuote)

    quoteCount += 1
    const count = document.getElementById('count')
    count.innerText = `${quoteCount} citation(s)`

    inputQuote.value = ''
    inputAuthor.value = ''
}

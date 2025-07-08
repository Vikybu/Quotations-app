const btnSubmit = document.getElementById('btn-submit')
const divQuoteList = document.getElementById('quote-list')
const inputQuote = document.getElementById('quote-entry')
const inputAuthor = document.getElementById('author-name')

let quoteCount = 1
let totalCount = 0

if(localStorage.getItem('quotes') == null){
    localStorage.setItem('quotes', '')
}

addQuote()
quoteTotalCount()

btnSubmit.addEventListener('click',
    quoteStorage,
    addQuote,
    quoteTotalCount
)

// Ajout de la citation et de l'auteur dans le localStorage
function quoteStorage() {
    const text = inputQuote.value
    const author = inputAuthor.value
    const allQuotes = localStorage.getItem('quotes')
    if (allQuotes === ''){
        localStorage.setItem('quotes', JSON.stringify([{"author" : author, "text" : text}]))
    } else {
        let allQuotesList = JSON.parse(allQuotes)
        allQuotesList.push({"author" : author, "text" : text})
        localStorage.setItem('quotes', JSON.stringify(allQuotesList))
    }
}


// Affiche les auteurs + citations stockés dans le localStorage
function addQuote() {
    const allQuotes = localStorage.getItem('quotes')
    let allQuotesList = JSON.parse(allQuotes)

    allQuotesList.forEach(element => {
        const quoteP = document.createElement('p')
        const authorP = document.createElement('p')
        const divQuote = document.createElement('div')

        quoteP.className = 'text'
        authorP.className = 'author'
        divQuote.className = 'quote'

        divQuote.appendChild(quoteP)
        divQuote.appendChild(authorP)
        divQuoteList.appendChild(divQuote)

        quoteP.innerText = element.author
        authorP.innerText = element.text
    });

    inputQuote.value = ''
    inputAuthor.value = ''
}     

//Permet de compter le nombre de citations enregistrées
function quoteTotalCount(){
    const allQuotes = localStorage.getItem('quotes')
    let allQuotesList = JSON.parse(allQuotes)

    totalCount = allQuotesList.length + quoteCount
    count.innerText = `${totalCount} citation(s)`
}
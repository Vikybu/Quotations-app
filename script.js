const btnSubmit = document.getElementById('btn-submit')
const divQuoteList = document.getElementById('quote-list')
const inputQuote = document.getElementById('quote-entry')
const inputAuthor = document.getElementById('author-name')

let quoteCount = 1
let totalCount = 0
let newStorage = {}


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

    quoteStorage()

    quoteCount += 1
    totalCount = storageCount + quoteCount
    const count = document.getElementById('count')
    count.innerText = `${totalCount} citation(s)`


    inputQuote.value = ''
    inputAuthor.value = ''

}

//Storage des citations+auteur dans la structure JSON
function quoteStorage(){
    text = inputQuote.value
    author = inputAuthor.value

    newStorage = JSON.parse(localStorage.getItem("text")) || {}

    newStorage[author] = [text]

    localStorage.setItem("text", JSON.stringify(newStorage))
}

//Affichage des citations+auteurs enregistrés dans le localStorage
function quoteDisplay(){
    const newStorage = JSON.parse(localStorage.getItem("text")) || {}
    for (const author in newStorage) {
        const quotes = newStorage[author]

        quotes.forEach((quoteText) => {

            const quoteP = document.createElement('p')
            const authorP = document.createElement('p')
            const divQuote = document.createElement('div')

            quoteP.className = 'text'
            authorP.className = 'author'
            divQuote.className = 'quote'

            quoteP.innerText = quoteText
            authorP.innerText = author

            divQuote.appendChild(quoteP)
            divQuote.appendChild(authorP)
            divQuoteList.appendChild(divQuote)
    })
    }
}

function quoteObjectCount(){
    storageCount = Object.entries(newStorage).length
    console.log(storageCount)
    totalCount = storageCount + quoteCount
    const count = document.getElementById('count')
    count.innerText = `${totalCount} citation(s)`
}

quoteDisplay()
quoteObjectCount()


/*function quoteDelete() {
    for (const author in localStorage) {
        localStorage.removeItem(author)
    }
}
*/

//quoteDelete()

/*
 for (author in newStorage) {
        
    }
*/
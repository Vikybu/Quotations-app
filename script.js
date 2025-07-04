const btnSubmit = document.getElementById('btn-submit')
let quoteEntry = document.getElementById('quote-entry')
let authorName = document.getElementById('author-name')
let text = ''
let author = ''

btnSubmit.addEventListener('click', quoteAuthorRetrieve)


function quoteAuthorRetrieve(){
    text = quoteEntry.value 
    author = authorName.value 
    console.log(text, author)
    console.log('OK')
}

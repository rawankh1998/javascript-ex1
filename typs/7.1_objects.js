const book={
    bookname: 'JavaScript',
    author: 'aithan',
    year: '2012',
    numOfPages: '1009'

}
function aBook(param){
return( `The book ${param.bookname} was written by ${param.author} the year  ${param.year}`)
}
console.log(aBook(book))
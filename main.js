var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add(bookName) {
    return [...bookList, bookName];
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList)
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  //filtering books that have NOT been returned by checking first transaction in borrows array
  const notReturned = books.filter((book) => !book.borrows[0].returned)
  //filtering books that have been returend by checking first transaction in borrows array
  const returned = books.filter((book) => book.borrows[0].returned) 
  //combining two arrays into one 
  const complete = [notReturned, returned]
  return complete 
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book
  //iterating through borrows array within book object
  const result = borrows.map((borrow) => {
    let newObj = {}
    //creating a new variable equal to the results of looping through the accounts array for an id match
    const accountMatch = accounts.find((account) => account.id === borrow.id)
    //creating a new object for each transaction in the borrows property
    newObj = {
      ...borrow,
      ...accountMatch
    }
    return newObj
  })
  result.splice(10)
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

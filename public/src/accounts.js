function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((personA, personB) => 
  personA.name.last.toLowerCase() > personB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  const {id} = account
  let total = 0
  //looping through books array
  books.forEach((book) => {
    const {borrows} = book
    //looping through the borrows property
    borrows.forEach((borrow) => {
      //checking if ID of account matches ID in borrows
      if (borrow.id === id) {
        //incrementating by 1 
        total += 1
      }
    })
  })
  return total
}


function getBooksPossessedByAccount(account, books, authors) {
  const {id} = account
  let final = []
  //looping through books array
  books.forEach((book) => {
    let newObj = {}
    //creating new variable equal to the output...
    const authorMatch = authors.find((author) => author.id === book.authorId)
    //checking if book currently checked out and belonging to the specified account
    if (!book.borrows[0].returned && book.borrows[0].id === id) {
      //creating a new object when there is a match
      newObj = {
        ...book,
        author: authorMatch
      }
      //pushing newly created object to 'final' variable
      final.push(newObj)
    }
  })
  return final
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

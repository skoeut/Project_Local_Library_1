const helperSortSplice = result => {
  //helper function that sorts from greatest to least and returns top five results
  result.sort((a, b) => b.count - a.count)
  result.splice(5)
}

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books){
  //looping through books array and targeting 1st transaction in borrows property to determine if book is checked out
  const result = books.filter((book) => !book.borrows[0].returned)
  return result.length
}

function getMostCommonGenres(books) {
  const result = books.reduce((acc, book) => {
    //check if acc array has genre
    const genreCount = acc.find((topic) => topic.name === book.genre)
    //if genre is not already listed in acc array, create a new objecct
    if (!genreCount) {
      const newObj = {
        name: book.genre,
        count: 1
      }
      acc.push(newObj)
      //if genre is already accounted for, increment count by 1
    } else {
      genreCount.count ++
    }
    return acc
  }, [])
  helperSortSplice(result)
  return result 
}

function getMostPopularBooks(books) {
  //loop through books array 
  const result = books.map((book) => {
    //create new object for each book object
    let newObj = {}
    newObj = {
      name: book.title,
      count: book.borrows.length
    }
    return newObj
  })
  helperSortSplice(result)
  return result
}

function getMostPopularAuthors(books, authors){
//loop through authors array 
  const result = authors.map((author) => {
    // to create a new object for each author
    let newObj = {}
      newObj = {
        name: `${author.name.first} ${author.name.last}`,
        count: 0
      }
      //loop through books array to find match between authorId and bookId 
      books.forEach((book) => {
        if (book.authorId === author.id) {
          //once a match is found set count equal to length of borrows 
          newObj.count += book.borrows.length
        }
      })
      return newObj 
    })
    helperSortSplice(result)
    return result
  }


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

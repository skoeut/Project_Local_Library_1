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
  const result = books.map((book) => {
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

function getMostPopularAuthors(books, authors) {
  const result = authors.map((author) => {
    
    let newObj = {}
      newObj = {
        name: `${author.name.first} ${author.name.last}`,
        count: 0
      }
      books.forEach((book) => {
        if (book.authorId === author.id) {
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

books = []
id = 0


module.exports = {
  getBooks: (req, res) => {
    res.status(200).send(books)
  },

  postBook: (req, res) => {
    const { title, author } = req.body
    let book = {
      id: id,
      title: title,
      author: author,
    }
    books.push(book)
    id++
    res.status(200).send(books)
  },
  updateBook: (req, res) => {
    const { title, author } = req.body
    const checkId = req.params.id
    const bookIndex = books.findIndex(element => element.id === +checkId)

    let modifiedBook = books[bookIndex]

    books[bookIndex] = {
      id: modifiedBook.id,
      title: title || modifiedBook.title,
      authori: author || modifiedBook.author,
    }
    res.status(200).send(books)
  },
  deleteBook: (req, res) => {
    const { id } = req.params
    const bookIndex = books.findIndex(element => element.id === +id)
    books.splice(bookIndex, 1)
    res.status(200).send(books)
  }
}
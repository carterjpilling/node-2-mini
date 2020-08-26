const express = require('express')
const bookCtrl = require('../server/controllers/book_controllers')

const app = express()

app.use(express.json())

app.get('/api/books', bookCtrl.getBooks)
app.post('/api/books', bookCtrl.postBook)
app.put('/api/books/:id', bookCtrl.updateBook)
app.delete('/api/books/:id', bookCtrl.deleteBook)

const port = 4000
app.listen(port, () => {
  console.log(`Port ${port} hears ya!`)
})

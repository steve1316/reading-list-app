import React, { createContext, useState } from 'react'
import uuid from 'uuid/v1'

export const BookContext = createContext()

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'Book 1', author: 'Steve Tu', id: 1 },
    { title: 'Book 2', author: 'John Wick', id: 2 }
  ])

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }])
  }

  // Create a new array of the books whose id is not the same as the one passed to removeBook.
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id))
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider

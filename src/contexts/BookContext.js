import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducer'

export const BookContext = createContext()

const BookContextProvider = props => {
  // Tell bookReducer to send back the state as the default action and then parse that localData. If state was empty, return empty array.
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : []
  })

  // Put books from a object to stringified version into localStorage.
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider

import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext)

  // BookDetails is called in a <ul>. On click, remove the entry. Otherwise, display the title and author in a <li>.
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className='title'>{book.title}</div>
      <div className='author'>{book.author}</div>
    </li>
  )
}

export default BookDetails

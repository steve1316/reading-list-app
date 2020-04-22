import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
  const { books } = useContext(BookContext)

  // If books exist, iterate through it and display each book. Otherwise, display nothing.
  return books.length ? (
    <div className='book-list'>
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />
        })}
      </ul>
    </div>
  ) : (
    <div className='empty'>No books to read</div>
  )
}

export default BookList

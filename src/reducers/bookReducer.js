import uuid from 'uuid/v1'

export const bookReducer = (state, action) => {
  switch (action.type) {
    // Add a new book after the end of state using the following information.
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid()
        }
      ]

    // Return a new array of the state and remove any books whose id was not the same.
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id)

    // Return a empty array to clear it.
    case 'REMOVE_ALL':
      return []

    // Otherwise, return the state, empty or not.
    default:
      return state
  }
}

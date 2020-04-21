import React, { Component } from 'react';

class BookList extends Component {
    render() { 
        return (
            <div className='bookList'>
                <ul>
                    <li>The Way of Kings</li>
                    <li>The Name of the Wind</li>
                    <li>The Final Empire</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;
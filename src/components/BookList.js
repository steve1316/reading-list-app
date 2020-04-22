import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    //console.log(this.context);

    // Determine if theme is light or dark.
    const { isLightTheme, light, dark } = this.context;
    const currentTheme = isLightTheme ? light : dark;

    return (
      <div
        className="bookList"
        style={{ background: currentTheme.bg, color: currentTheme.syntax }}
      >
        <ul>
          <li style={{ background: currentTheme.ui }}>The Way of Kings</li>
          <li style={{ background: currentTheme.ui }}>The Name of the Wind</li>
          <li style={{ background: currentTheme.ui }}>The Final Empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;

import React, { Component, createContext } from 'react';

// ThemeContext will provide global session data sharing between the
// child components that are in it.
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    // Determines whether a component will use a Light or Dark theme.
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  };
  toggleTheme = () => {
    this.setState((prevState, props) => {
      return { isLightTheme: !prevState.isLightTheme };
    });
  };
  render() {
    return (
      // Spread syntax to all wrapped children components.
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;

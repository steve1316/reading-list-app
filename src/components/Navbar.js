import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context);
        // Decontructing
        const { isLightTheme, light, dark } = this.context;

        // If isLightTheme is true, set theme to light. Otherwise, set to dark.
        const currentTheme = isLightTheme ? light : dark;

        return (
            <nav style={{ background: currentTheme.ui, color: currentTheme.syntax }}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;
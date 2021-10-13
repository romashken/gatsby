import React from 'react';
import Navbar from './navbar';

export default function Layout({children}) {
    return (
        <div className="layouts">
            <Navbar />
            <div className="content">
                { children }
            </div>
            <footer>
                <p>Made by Me</p>
            </footer>
        </div>
    );
}

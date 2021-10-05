import React from "react";
import './style.css';
import Demo from './demo';
import {Route, Link} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Route exact path="./demo" component={Demo} />
        </div>
    )
}

export default App;
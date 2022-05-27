import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route, Routes, Link } from "react-router-dom";
import About from './About';
import Home from './Home';

class App extends React.Component {
  render() {
      return (
        <Router>
          <div className="App">
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                  <Link to="/about">About</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <hr />
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            </div>
          </Router>
        );
  }
}

export default App;
import './App.css';
import React from 'react';
import logo from './logo.svg';

const divStyle = {
    color:'black'
};
class Home extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <h2>Home Page</h2>
                <main>
                    <p>This section contains information home...</p>
                </main>
            </div>
            
        );
    }

}

export default Home;
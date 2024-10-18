import React from 'react';
import './index.css';
import Apitest from './api'; // Make sure to use the correct path
import Header from './header';
import Footer from './footer';

function App() {
    return (
        <div>
            <Header />
            <Apitest />
            <Footer />
        </div>
    );
}

export default App;


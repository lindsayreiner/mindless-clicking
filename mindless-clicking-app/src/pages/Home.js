import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
// import GeekJoke from '../components/GeekJoke';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <>
            <Header />
            <h1>Pick an app.</h1>
            <div className="appWrapper" style={{ display: 'flex' }}>
                <button style={{ backgroundColor: '#BEEA5E' }}><Link to="/joke" className="btn" style={{ backgroundColor: '#BEEA5E' }}>Get a Geek Joke</Link></button>
                <button style={{ backgroundColor: '#900C3F' }}><Link to="/math-game" className="btn" style={{ backgroundColor: '#900C3F' }}>Play the Math Game</Link></button>
                <Footer />
            </div>
        </>
    )
}

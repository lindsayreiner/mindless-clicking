import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../components/Header';
// import GeekJoke from '../components/GeekJoke';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <>
            <Header />
            <h1>Pick an app.</h1>
            <div className="appWrapper" style={{ display: 'flex' }}>
                <button><Link to="/joke" className="jokeBtn">Get a Geek Joke</Link></button>
                <button><Link to="/math-game" className="jokeBtn">Play the Math Game</Link></button>
                <Footer />
            </div>
        </>
    )
}

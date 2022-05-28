import React from 'react';

import Footer from '../components/Footer';
import GeekJoke from '../components/GeekJoke';
import Header from '../components/Header';
import HomeButton from '../components/HomeButton'



export default function JokePage() {
    return (
        <>
            <Header />
            <GeekJoke />
            <HomeButton />
            <Footer />
        </>
    )
}
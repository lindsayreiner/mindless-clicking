import React from 'react';

import Footer from '../components/Footer';
import MathGame from '../components/MathGame';
import Header from '../components/Header';
import HomeButton from '../components/HomeButton';



export default function MathPage() {
    return (
        <>
            <Header />
            <MathGame />
            <HomeButton />
            <Footer />
        </>
    )
}
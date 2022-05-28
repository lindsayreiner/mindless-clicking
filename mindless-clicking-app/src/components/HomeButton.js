import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeButton() {
    return (
        <>
            <button className="btn" style={{ backgroundColor: '#FFC300' }}><Link to='/' className="btn" style={{ backgroundColor: '#FFC300' }}>Do something new. Go Home.</Link></button>
        </>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeButton() {
    return (
        <>
            <button className="btn" ><Link to='/' className="btn">Do something new. Go Home.</Link></button>
        </>
    )
}

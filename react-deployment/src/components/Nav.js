import React from 'react';
import {Link} from 'react-router-dom'

export default function Nav () {
    return (
        <nav className='navbar'>
            <h3>Zachariah Schneider</h3>
            <ul>
                <li>
                    <Link to="#aboutMe">About Me</Link>
                </li>
                <li>
                    <Link to="#work">My Work</Link>
                </li>
            </ul>
        </nav>
    );
}
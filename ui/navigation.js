/**
 * Navigation component
 */

import React from 'react';
import { Link } from 'react-router';

const Navigation = () => 
    <nav>
        <Link to="/" > Home | </Link>
        <Link to="/about" > About </Link>
    </nav>;

export default Navigation;
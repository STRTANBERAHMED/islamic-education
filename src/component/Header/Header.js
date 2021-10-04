import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* top section */}
            <h1 className="text-center bg-dark text-white header">Islamic Education for Young Generations</h1>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;
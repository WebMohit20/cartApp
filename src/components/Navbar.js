import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="Navbar">
            <p>Shopping Cart</p>
            <div className="nav-links">
                <Link to="/">Home Page </Link>
                <Link to="/cart"> Cart Page</Link>
            </div>
        </div>
     );
}
 
export default Navbar;
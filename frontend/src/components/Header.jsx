import React from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid bg-dark py-3">
                    <Link to="/" className="navbar-brand text-warning" style={{ cursor: 'pointer' }}>AJAY-CART</Link>
                    <Search />
                    <Link to="/cart" className="navbar-brand text-light position-relative" style={{ cursor: 'pointer' }}>Cart
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" id='cart-num'>
                            {cartItems.length}
                        </span>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Header;
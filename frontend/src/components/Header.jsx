import React from 'react';
import Search from '../components/Search';
import './Navbar.css'
import Logo from '/images/profile_icon.png'
import { Link } from 'react-router-dom';

const Header = ({ cartItems , setLogin }) => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid bg-dark py-3">
                    <Link to="/" className="navbar-brand text-warning" style={{ cursor: 'pointer' }} id='logo'>AJAY-CART</Link>
                    <Search />
                    <div className="nav-2">
                        <Link to="/cart" className="navbar-brand text-light position-relative" style={{ cursor: 'pointer' }} id='cart'>Cart
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary" id='cart-num'>
                                {cartItems.length}
                            </span>
                        </Link>
                        <img onClick={()=>setLogin(true)} src={Logo} style={{marginLeft : 30 , cursor : 'pointer'}}/>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Header;
import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// logo picture
import logo from '../src/photos/crop logo.png'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Navbar() {

    const [{basket, user} , dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="container-fluid sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon/>
                </button>
                
                <NavLink style={{textDecoration: 'none'}} exact to="/"><div className="cont d-flex"><img className="navbar__brand__img" src={logo} /><span className="navbar-brand">Slacks Fit</span></div></NavLink>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/apparel">Apparel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                        </li>
                    </ul>
                </div>

                
                <div className='header__icons'>
                <NavLink className="nav-link icons" to="/"><SearchIcon/></NavLink>
                <NavLink className="nav-link icons d-flex" to="/cart"><ShoppingCartIcon/><span><h6>{basket?.length}</h6></span></NavLink>
                <NavLink className="nav-link icons" to="/login"><AccountCircleIcon/></NavLink>
                <NavLink className="nav-link icons" to={!user && "/login"}><div onClick={handleAuthentication} ><span> {user ? 'Sign Out' : 'Sign In'} </span></div></NavLink>
                
                </div>
            </nav>
        </div>
    )
}

export default Navbar

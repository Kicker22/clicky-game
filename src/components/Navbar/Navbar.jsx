import React from 'react';
import './navbar.css'

function Navbar(){
    return (
        <nav className = "navbar navbar-dark d-flex justify-content-center">
            <a className = "navbar-brand " style = {{color:"white"}}>
                Clicky Game
            </a>
        </nav>
    )
}

export default Navbar;
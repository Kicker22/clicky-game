import React from 'react';

const navStyle={
    background:"black"
}
function Navbar(){
    return (
        <nav style={navStyle} className = "navbar navbar-dark d-flex justify-content-center">
            <a className = "navbar-brand " style = {{color:"white"}}>
                Clicky Game
            </a>
        </nav>
    )
}

export default Navbar;
import React from 'react'


const jumboStyle = {
    color: 'red'
}
function Jumbotron(){
    return(
        <div style={jumboStyle} className='jumbotron jumbotron-fluid bg-dark'>
            <div className="container">
                <h1 className='display-4 text-center'>Welcome to Freddy Fazbears Pizzaria</h1>
            </div>
        </div>

    )
}

export default Jumbotron;
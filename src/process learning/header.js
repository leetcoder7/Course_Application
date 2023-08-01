import React from "react"

function Header({ name, title }) {  //component
    // to get the dynamic value we have to do object destructuring
    return (
        <div style={ {background: 'mint blue', padding: 20} }> (as it is not a simple html code we are writing in js so it will start with {})
            <h1>{title}</h1> (passing dynamic values is called propts)
            <h1>{name}</h1> (to pass the name variable value we have to do string interpolation to write js code we must write {}) 
            <p>This is a trail header component</p>
        </div>
    )
}

export default Header;



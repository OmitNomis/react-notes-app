import React from 'react';

const Header = ({handleDarkMode}) =>{

    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=> handleDarkMode((mode) => !mode)} className="save">Toggle Dark Mode</button>
        </div>
    )
}
export default Header
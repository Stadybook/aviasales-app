import React from "react";
import photo  from './Logo.svg'
import './Header.scss'

function Header(){
    return(
        <div className="logo">
            <img  src={photo} alt='logo'></img>
        </div>
    )
}

export default Header;
import React from 'react'
import Mainlogo from "../images/Mainlogo.png"
import "./Header.css";
import Minilogo from "../images/minilogo.png"
import {
    Link
  } from "react-router-dom";
  
function Header() {
    return (
        <div className="MainLogo">
            <Link to={{
                pathname:"/eLmede"
            }}>
            <img src={Mainlogo}></img>
            </Link>
        </div>
    )
}

export default Header

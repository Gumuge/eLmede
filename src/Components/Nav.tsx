import React from 'react'
import "./Nav.css";
import {
    Link
  } from "react-router-dom";

function Nav():JSX.Element {
    return (
        <div className="Nav">
            <Link to={{
                pathname:"/info"
            }}>
            <button>회사소개</button>
            </Link>
            <Link to={{
                pathname:"/manpower"
            }}>
            <button>인력현황</button>
            </Link> 
            <Link to={{
                pathname:"/target"
            }}>
            <button>개발목표</button>
            </Link> 
            <Link to={{
                pathname:"/thesis"
            }}>
            <button>특허 및 논문자료</button>
            </Link> 
            <div>
            <hr></hr>
            </div>
        </div>
            
    )
}

export default Nav

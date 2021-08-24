import React from 'react'
import "./Nav.css";
import {
    Link
  } from "react-router-dom";

function Nav():JSX.Element {
    return (
        <div className="Nav">
            <Link to={{
                pathname:"/eLmede/info"
            }}>
            <button>회사소개</button>
            </Link>
            <Link to={{
                pathname:"/eLmede/manpower"
            }}>
            <button>인력현황</button>
            </Link> 
            <Link to={{
                pathname:"/eLmede/target"
            }}>
            <button>개발목표</button>
            </Link> 
            <Link to={{
                pathname:"/eLmede/thesis"
            }}>
            <button>특허 및 논문자료</button>
            </Link> 
        </div>
    )
}

export default Nav

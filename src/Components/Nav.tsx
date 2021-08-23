import React from 'react'
import "./Nav.css";
import {
    Link
  } from "react-router-dom";

function Nav():JSX.Element {
    return (
        <div className="Nav">
            <Link to={{
                pathname:"/eLmede"
            }}>
            <button>회사소개</button>
            </Link>
            <Link to={{
                pathname:"/member"
            }}>
            <button>인력현황</button>
            </Link> 
            <Link to={{
                pathname:"/ex3"
            }}>
            <button>개발자료</button>
            </Link> 
            <Link to={{
                pathname:"/ex4"
            }}>
            <button>특허 및 논문자료</button>
            </Link> 
        </div>
    )
}

export default Nav

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
            <button>멤버</button>
            </Link> 
            <Link to={{
                pathname:"/ex3"
            }}>
            <button>연구자료</button>
            </Link> 
            <Link to={{
                pathname:"/ex4"
            }}>
            <button>연구자료</button>
            </Link> 
        </div>
    )
}

export default Nav

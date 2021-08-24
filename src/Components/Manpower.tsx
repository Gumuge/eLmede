import React from 'react'
import Nav from "./Nav";
import Header from "./Header";
import "./Manpower.css";

function Manpower() {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <nav>
                <Nav></Nav>
            </nav>
            <article>
                <div className="Intro">
                    <p>
                        Manpower
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Manpower

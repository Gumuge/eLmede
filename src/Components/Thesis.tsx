import React from 'react'
import Nav from "./Nav";
import Header from "./Header";
import "./Thesis.css";

function Thesis() {
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
                        특허 및 연구논문 현황
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Thesis

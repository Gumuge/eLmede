import React from 'react'
import Nav from "./Nav";
import Header from "./Header";
import "./Target.css";

function Target() {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <nav>
                <Nav></Nav>
            </nav>
            <article className="target">
                <div className="Intro">
                    <p>
                        개발 신약 타깃
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Target

import React from 'react'
import Nav from "./Nav";
import Header from "./Header";
import "./Target.css";
import target from "../images/target2.png";

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
                <div className="targetimg">
                    <img src={target} useMap={"#map1"}></img>
                    <map name="map1">
                    <area shape={"rect"} coords={"131,9,178,39"}
                        href={"http://tagclub.intizen.com"} target={"_blank"}></area>
                    <area shape={"circle"} coords={"425,200,21"}
                        href={"http://www.daum.net"} target={"_blank"}></area>
                     <area shape={"poly"} coords={"266,20,266,66,285,70,303,63,302,23,283,13"}
                        href={"http://www.empas.com"} target={"_blank"}></area>
                    </map>
                </div>
            </article>
        </div>
    )
}

export default Target

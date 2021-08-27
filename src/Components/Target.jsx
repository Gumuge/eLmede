import React from 'react'
import Nav from "./Nav";
import Header from "./Header";
import "./Target.css";
import target from "../images/target2.png";
import { useEffect, useState } from 'react';
import ImageMap from "image-map";
import {Link} from "react-router-dom";

function Target() {
    useEffect(() => {
        ImageMap('img[usemap]');
        setisStart(true);
    }, [])
    const [isStart, setisStart] = useState(false);
    console.log(isStart);
    return (
        <div className="Main">  
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
                    <img src={target} useMap={"#map1"}></img>
                    <map name="map1">
                    <div className="Nav">
                        
                    <Link to={{
                        pathname:"/target/1"
                    }}>
                    <area target="_self" alt="" title="" href="" coords="495,49,403,149,496,249,589,153" shape="poly"></area>
                    </Link>
                    <Link to={{
                        pathname:"/target/2"
                    }}>
                    <area target="_self" alt="" title="" href="" coords="382,178,293,274,386,378,473,284" shape="poly"></area>
                    </Link>
                    <Link to={{
                        pathname:"/target/3"
                    }}>
                    <area target="_self" alt="" title="" href="" coords="494,309,399,408,494,510,590,410" shape="poly"></area>
                    </Link>
                    <Link to={{
                        pathname:"/target/4"
                    }}>
                    <area target="_self" alt="" title="" href="" coords="707,309,617,407,709,508,800,410" shape="poly"></area>
                    </Link>
                    <Link to={{
                        pathname:"/target/5"
                    }}>
                    <area target="_self" alt="" title="" href="" coords="825,178,733,279,824,378,917,281" shape="poly"></area>
                    </Link>
                    <Link to={{
                        pathname:"/target/6"
                    }}>
                    <area target="_self" alt="" title="" href="" coords="708,46,618,146,706,246,804,154" shape="poly"></area>
                    </Link>
                    </div>
                    </map>              
            </article>
        </div>
    )
}

export default Target

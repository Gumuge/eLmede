import React from 'react'
import Nav from "./Nav";
import Header from "./Header";
import "./Target.css";
import target from "../images/target2.png";
import jquery from "jquery";
import $ from "jquery";
import { useEffect } from 'react';
import ImageMap from "image-map";
function Target() {
    useEffect(() => {
        ImageMap('img[usemap]');
    }, [])
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
                    <img src={target} useMap={"#map1"}></img>
                    <map name="map1">
                    <area target="_self" alt="" title="" href="https://elmed.co.kr/target/1" coords="495,49,403,149,496,249,589,153" shape="poly"></area>
                    <area target="_self" alt="" title="" href="https://elmed.co.kr/target/2" coords="382,178,293,274,386,378,473,284" shape="poly"></area>
                    <area target="_self" alt="" title="" href="https://elmed.co.kr/target/3" coords="494,309,399,408,494,510,590,410" shape="poly"></area>
                    <area target="_self" alt="" title="" href="https://elmed.co.kr/target/4" coords="707,309,617,407,709,508,800,410" shape="poly"></area>
                    <area target="_self" alt="" title="" href="https://elmed.co.kr/target/5" coords="825,178,733,279,824,378,917,281" shape="poly"></area>
                    <area target="_self" alt="" title="" href="https://elmed.co.kr/target/6" coords="708,46,618,146,706,246,804,154" shape="poly"></area>
                    {/* <area target="_blank" alt="" title="" href="http://localhost:3000/eLmede/target/1" coords="527,64,437,162,530,267,625,166" shape="poly"></area>
                    <area target="_blank" alt="" title="" href="http://localhost:3000/eLmede/target/2" coords="413,196,323,294,416,399,511,298" shape="poly"></area>
                    <area target="_blank" alt="" title="" href="http://localhost:3000/eLmede/target/3" coords="532,352,442,450,535,555,630,454" shape="poly"></area>
                    <area target="_blank" alt="" title="" href="http://localhost:3000/eLmede/target/4" coords="748,350,658,448,751,553,846,452" shape="poly"></area>
                    <area target="_blank" alt="" title="" href="http://localhost:3000/eLmede/target/5" coords="884,204,794,302,887,407,982,306" shape="poly"></area>
                    <area target="_blank" alt="" title="" href="http://localhost:3000/eLmede/target/6" coords="750,59,660,157,753,262,848,161" shape="poly"></area> */}
                </map>
                
            </article>
        </div>
    )
}

export default Target

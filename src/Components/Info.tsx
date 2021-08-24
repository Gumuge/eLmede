import React from 'react'
import "./Info.css";
import Nav from "./Nav";
import Header from "./Header";
import vision from "../images/vision.png";
import outline from "../images/outline.png";

function Info() {
    return (
        <div className="Info">
            <header>
                <Header></Header>
            </header>
            <nav>
                <Nav></Nav>
            </nav>
            <article>
            <div className="Intro">
                <p>Introduction</p>
            </div>
            <div className="IntroImg">
            <div className="Vision">
                <img src={vision}></img>
                <p style={{color:"blue"}}>
                신약개발을 통한 인간 생명의 질 향상 
                </p>
                <p style={{textAlign:"left"}}>
                (1) 환자들 치료를 통한 전 세계 환자들의 생명의 질 향상​
                </p>
                <p style={{textAlign:"left"}}>
                (2) 회사 구성원의 삶의 질 향상​
                </p>
                <p style={{textAlign:"left"}}>
                (3) 국가 및 세계 경제 활성화를 통한 모든 사람들의 삶의 질 향상
                </p>
            </div>
            <div className="Outline">
                <img src={outline}></img>
                <p style={{color:"#660066" }}>eLmed
                설립일: 2019. 6.19​
                </p>
                <p style={{textAlign:"left"}}>
                주요사업: 신약 개발​
                </p>
                <p style={{textAlign:"left"}}>
                본점 소재지: 한림대학교 의과대학 3419호​
                </p>
                <p style={{textAlign:"left"}}>
                대표이사: 박재봉 교수 PhD (생화학 및 분자생물학 전공)
                </p>
            </div>
            </div>
            
            </article>
        </div>
    )
}

export default Info

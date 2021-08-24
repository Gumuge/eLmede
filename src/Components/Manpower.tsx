import React from 'react'
import Nav from "./Nav";
import Header from "./Header";
import "./Manpower.css";
import man1 from "../images/man1.png";
import man2 from "../images/man2.png";
import profe from "../images/profe.png";

function Manpower() {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <nav>
                <Nav></Nav>
            </nav>
            <article className="ManInfo">
                <div className="Intro">
                    <p>
                        Manpower
                    </p>
                </div>
                <div className="Man2">
                    <div>
                    <img src={man1}></img>
                    <p>
                    &nbsp;대학 및 회사 연구인력 (총 11명)<br></br> ​
                    생화학, 분자생물학, 세포생물학, 암 생물학, 신경과학
                    </p>
                    </div>
                    <p>박재봉 교수, 박사  (PhD) (이엘메드 대표)​</p>
                    <p>김재규  박사 (PhD) ​</p>
                    <p>Kim Cuong Cap  박사 (PhD)(이엘메드 연구원 )</p>​
                    <p>Rokibul Islam   박사 (PhD) ​</p>
                    <p>민정기 (박사과정) ​</p>
                    <p>이윤범 (박사과정) ​</p>
                    <p>Abu Jubayer Hossain (박사과정)​</p>
                    <p>Amir Hamza (박사과정)​</p>
                    <p>Oungerel Dogsom (박사과정)​</p>
                    <p>Shohel Madmud (박사과정)​</p>
                    <p>박진형  (이엘메드 사무직원) </p>
                </div>
                <div className="Man1">
                    <div>
                    <img src={man2}></img>
                    <p>박재봉 대표 이사 학력 및 약력</p>
                    </div>           
                    <p>서울대학교 생물교육과, 학사 ​</p>
                    <p>한국과학기술원(KAIST)  생물공학과, 석사 </p>​
                    <p>한국과학기술원(KAIST)  생명과학과, 박사​ </p>
                    <p>미국 U. Washington, 포스트닥 ​</p>
                    <p>미국 Scripps 연구소, 연구원​</p>
                    <p>한림대학교 의과대학, 수석 부학장​</p>
                    <p>한림대 치매 특성화 연구단, 단장​</p>
                    <p>한국연구재단 기초연구실 (BRL) 책임연구원 ​</p>
​                    <p>한림대학교 의과대학 생화학교실, 교수  (현)​</p>  
                    <p>한림대 중개의과학연구원, 원장       (현)​</p>  
                    <p>Biomedicines (스위스 저널 IF=6.1), Editorial Member     (현)​</p>  
                    <p>이엘메드 주식회사, 대표                                                        (현)</p>
                </div>
                <img src={profe} className="profe"></img>
            </article>
        </div>
    )
}

export default Manpower

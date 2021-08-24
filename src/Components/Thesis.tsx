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
            <article className="thesis">
                <div className="Intro">
                    <p>
                        특허 및 연구논문 현황
                    </p>
                </div>
                <table className="table1">
                    <tr style={{backgroundColor:"lightgreen"}}>
                        <th>번호</th><th>구분</th><th>제목</th><th>특허등록번호</th>
                        <th>등록/출원일시</th><th>역할</th><th>출원인</th>
                    </tr>
                    <tr>
                        <td>1</td><td>등록</td><td>고형암진단용 인산화 RhoA 바이오마커로서의 용도</td>
                        <td>제10-1974728호</td><td>2019.04.25</td><td>발명자</td><td>한림대학산학협력단</td>
                    </tr>
                    <tr>
                    <td>2</td><td>등록</td><td>RhoA 펩티드 억제제를 유효성분으로 함유하는 항암제</td>
                        <td>제10-2224059호</td><td>2021.03.02</td><td>발명자</td><td>한림대학산학협력단 이엘메드</td>
                    </tr>
                    <tr>
                    <td>3</td><td>등록</td><td>RhoA 단백질의 인산화 조절을 이용하는 치매의 예방 또는 치료용 약학적 조정물</td>
                        <td>10-2020-0053254 ​(출원)</td><td>2020.05.04</td><td>발명자</td><td>한림대학산학협력단 이엘메드</td>
                    </tr>
                </table>
                <table className="table2">
                    <tr style={{backgroundColor:"purple"}}>
                        <th>번호</th><th>구분</th><th>논문명</th><th>게재지</th>
                        <th>게재연도</th><th>역할</th><th>Impact factor</th><th>기타</th>
                    </tr>
                    <tr>
                        <td>1</td><td>논문</td>
                        <td>RhoA GTPase phosphorylated at tyrosine 42 by src kinase binds to 
                            β-catenin and contributes transcriptional regulation of vimentin upon Wnt3A 
                        </td>
                        <td>
                        Redox Biology ​40: 101842
                        </td>
                        <td>2021</td><td>책임</td>
                        <td 
                        style={{backgroundColor:"purple" ,
                        color:"white",
                        fontWeight:"bold"}}>11.799(6.7%)</td>
                        <td>
                        국내특허등록 (표적항암제) ​PCT 등록 ​국제출원 예정
                        </td>
                    </tr>
                    <tr>
                        <td>2</td><td>논문</td>
                        <td>Distinct dual roles of p-Tyr42 RhoA GTPase in Tau phosphorylation  and ATP citrate lyase activation upon different Aβ concentrations  
                        </td>
                        <td>
                        Redox Biology​ 32:101446
                        </td>
                        <td>2020</td><td>책임</td>
                        <td 
                        style={{backgroundColor:"purple" ,
                        color:"white",
                        fontWeight:"bold"}}>11.799(6.7%)</td>
                        <td>
                        특허출원 (치매치료제 ​관련), 언론홍보
                        </td>
                    </tr>
                    <tr>
                        <td>3</td><td>논문</td>
                        <td>nsulin induces phosphorylation of pyruvate dehydrogenase through RhoA activation pathway in HepG2 cells.  
                        </td>
                        <td>
                        FASEB Journal​ 33: 2072-2083 
                        </td>
                        <td>2019</td><td>책임</td>
                        <td 
                        style={{backgroundColor:"purple" ,
                        color:"white",
                        fontWeight:"bold"}}>5.391(21.7%)</td>
                        <td>
                        언론기사화​ (인슐린이 간암을 촉진함)
                        </td>
                    </tr>
                    <tr>
                        <td>4</td><td>논문</td>
                        <td>Regulation of RhoA GTPase and various transcription factors in the RhoA pathway 
                        </td>
                        <td>
                        Journal of Cellular Physiology ​233: 6381-6392
                        </td>
                        <td>2018</td><td>책임</td>
                        <td 
                        style={{backgroundColor:"purple" ,
                        color:"white",
                        fontWeight:"bold"}}>6.384(8.6%)</td>
                        <td>
                        Review paper
                        </td>
                    </tr>
                    <tr>
                        <td>5</td><td>논문</td>
                        <td>Tyr42 phosphorylation of RhoA GTPase promotes tumorigenesis through nuclear factor (NF)-κB. 
                        </td>
                        <td>
                        Free Radical Biology ​and Medicine​ 112: 69-83
                        </td>
                        <td>2017</td><td>책임</td>
                        <td 
                        style={{backgroundColor:"purple" ,
                        color:"white",
                        fontWeight:"bold"}}>7.376(13.8%)</td>
                        <td>
                        특허등록(암진단 2019)​표적항암제관련사업화시작
                        </td>
                    </tr>
                    <tr>
                        <td>6</td><td>논문</td>
                        <td>RhoA GTPase oxidation stimulates cell proliferation via nuclear factor-kB activation 
                        </td>
                        <td>
                        Free Radical Biology ​and Medicine​ 103:57-68
                        </td>
                        <td>2017</td><td>책임</td>
                        <td 
                        style={{backgroundColor:"purple" ,
                        color:"white",
                        fontWeight:"bold"}}>7.376(13.8%)</td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td><td>논문</td>
                        <td>Regulation of RhoA activity by the cellular prion protein
                        </td>
                        <td>
                        Cell Death and Diseases​ 8: e2668
                        </td>
                        <td>2017</td><td>책임</td>
                        <td 
                        style={{backgroundColor:"purple" ,
                        color:"white",
                        fontWeight:"bold"}}>8.469(20.4%)</td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td><td>논문</td>
                        <td>Wnt3A Induces GSK-3β Phosphorylation and β-Catenin Accumulation Through RhoA/ROCK 
                        </td>
                        <td>
                        Journal of Cellular Physiology ​232: 1104-1113
                        </td>
                        <td>2017</td><td>책임</td>
                        <td 
                        style={{backgroundColor:"purple" ,
                        color:"white",
                        fontWeight:"bold"}}>6.384(8.6%)</td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>9</td><td>논문</td>
                        <td>Transforming growth factor-beta1 regulates macrophage migration via RhoA.
                        </td>
                        <td>
                        Blood ​108: 1821-1829
                        </td>
                        <td>2006</td><td>책임</td>
                        <td 
                        style={{backgroundColor:"purple" ,
                        color:"white",
                        fontWeight:"bold"}}>22.113(1.3%)</td>
                        <td>
                        언론기사화​ 한림대 우수논문상
                        </td>
                    </tr>
                    <tr>
                        <td>10</td><td>논문</td>
                        <td>Rho is involved in superoxide formation during phagocytosis of opsonized zymosans. 
                        </td>
                        <td>
                        Journal of Biological ​Chemistry ​279: 21589-21597
                        </td>
                        <td>2004</td><td>책임</td>
                        <td 
                        style={{backgroundColor:"purple" ,
                        color:"white",
                        fontWeight:"bold"}}>6.355(11.9%)</td>
                        <td>
                        2005년 한국과학기술​총 연합회 우수논문상​ 2005년 한림대 우수논문상​
                        </td>
                    </tr>
                </table>
            </article>
        </div>
    )
}

export default Thesis

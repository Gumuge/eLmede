import React from 'react';
import './MainPage.css';
import Nav from "./Nav";
import Header from "./Header";
import Main from "../images/Main.png";

function MainPage() {
  return (
    <div className="Main">
      <header>
        <Header></Header>
      </header>
      <nav>
        <Nav></Nav>
      </nav>
      <article>
        <img src={Main}></img>
      </article>
    </div>
  );
}

export default MainPage;

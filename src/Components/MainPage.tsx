import React from 'react';
import logo from './logo.svg';
import './MainPage.css';
import Nav from "./Nav";
import Header from "./Header";

function MainPage() {
  return (
    <div className="App">
        <header>
            <Header></Header>
        </header>
        <nav>
            <Nav></Nav>
        </nav>
      
      <article className="App-header">
        elmede 폰트적용 테스트
      </article>
    </div>
  );
}

export default MainPage;

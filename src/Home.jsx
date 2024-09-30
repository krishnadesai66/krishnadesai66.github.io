import React from 'react';
import './edithome.css';
import Header from './Header.jsx'

function Home() {
  return (
    <div className = "home-container">
      <Header />
        <div className = "animation">
              <div className="text">
                Hello world, I'm <span class = "name"> Krishna.</span>
              </div> 
              <br></br>
              <div className = "subtext">Software Engineer | Aspiring Innovator</div>
          </div>
      </div>
  );
}

export default Home;

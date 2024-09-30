import React from 'react';
import './Home.css';  // Import CSS if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);

function Home() {
  return (
    <div>
      <div className="header animation">
        <a href="index.html" className="logo">KD</a>
        <div className="header-right">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
        
      <div className="svg-wrapper animation">
        <svg height="60" width="337" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="337" />
        </svg>
        <div className="text animation">Hello, I'm Sam.<br />
          <p className="animation" style={{ fontSize: '20px', fontFamily: 'Quicksand' }}>
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

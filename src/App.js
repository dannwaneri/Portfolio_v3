import React from 'react'
import "./App.css";

function App() {
  return (
    <>
    <div className="App">
      <header className="header">
        <div className="logo">
          <span className=""></span>
        </div>
        <div className="content">
          <div className="inner">
              <h1>Dimension</h1>
              <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br/>
						for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
        </div>
        </div>
        <nav className="use-middle">
							<ul>
								<li><a href="#intro">Intro</a></li>
								<li><a href="#work">Work</a></li>
								<li className="is-middle"><a href="#about">About</a></li>
								<li><a href="#contact">Contact</a></li>
							</ul>
						</nav>
      </header>
    </div>
    <div className="bg"></div>
    </>
  );
}

export default App;

import React from 'react'


const Header = (props) => {
    return (
        <header className="header" style = {props.timeout ? {display:'none'} : {}}>
        <div className="logo">
        <span className="icon fa-laptop"></span>
        </div>
        <div className="content">
          <div className="inner">
              <h1>Penuel Nwaneri</h1>
              <p>Software Engineer</p>
        </div>
        </div>
        <nav className="use-middle">
							<ul>
								<li onClick ={ () => props.onOpenArticle('intro')}><a href="#intro">Intro</a></li>
								<li onClick ={ () => props.onOpenArticle('work')}><a href="#work">Work</a></li>
								<li onClick ={ () => props.onOpenArticle('about')}className = "is-middle"><a href="#about">About</a></li>
								<li onClick ={ () => props.onOpenArticle('contact')}><a href="#contact">Contact</a></li>
							</ul>
						</nav>
      </header>
    )
}

export default Header;
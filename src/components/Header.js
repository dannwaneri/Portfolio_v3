import React from 'react'


const Header = ({timeout,onOpenArticle}) => {
    return (
        <header className="header" style = {timeout ? {display:'none'} : {}}>
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
								<li onClick ={ () => onOpenArticle('intro')}><a href="#intro">About</a></li>
								<li onClick ={ () => onOpenArticle('work')}><a href="#work">Portfolio</a></li>
								<li onClick ={ () => onOpenArticle('about')}className = "is-middle"><a href="#about">Blog</a></li>
								<li onClick ={ () => onOpenArticle('contact')}><a href="#contact">Contact</a></li>
							</ul>
						</nav>
      </header>
    )
}

export default Header;
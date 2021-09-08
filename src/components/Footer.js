import React from 'react'



const Footer = (props) => {
return(
    <footer id="footer" style = {props.timeout ?{display:'none'} : {}}>
						<p className="copyright">© Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
					</footer>
)
}

export default Footer;

import React from 'react'



const Footer = ({timeout}) => {
return(
    <footer id="footer" style = {timeout ?{display:'none'} : {}}>
						<p className="copyright">© Nwaneri Penuel</p>
					</footer>
)
}

export default Footer;

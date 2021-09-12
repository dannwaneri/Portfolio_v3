
import React,{useState} from 'react';
import { useToasts } from "react-toast-notifications";
import ReactGA from "react-ga";
import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

const encode = (data) => {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

const Main = (props) => {
  const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const { addToast } = useToasts();
  
  const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

  const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		ReactGA.event({
			category: "Contact Form",
			action: "Submit",
		});
		try {
			const res = await fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({ "form-name": "contact", ...formData }),
			});

			if (!res.ok) {
				await res.text().then((text) => {
					throw Error(text);
				});
			}
			addToast(
				"Your message was sent successfully. I'll get back to you shortly.",
				{
					appearance: "success",
					autoDismiss: true,
				}
			);
			setFormData({
				name: "",
				email: "",
				message: "",
			});
		} catch (err) {
			addToast("Something went wrong while sending your message.", {
				appearance: "error",
				autoDismiss: true,
			});
			console.error(err);
		}
		setLoading(false);
	};

  let close =  (
    <div role="button" className="close"
    onClick={() => props.onCloseArticle()}
    aria-hidden="true"
    tabIndex={0}
    >
      {''}
    </div>
  )
return(
    <div id ='main' ref = {props.setWrapperRef} style = {props.timeout ? {display:'flex'} : {display:'none'}}>
        <article id="intro" className={`${props.article ==='intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} 
   style={{display:'none'}}>
							<h2 className="major">Intro</h2>
								<span className="image main"><img src={pic01} alt=""/></span>
								<p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
							      {close}</article>

                            <article id="work" className = {`${props.article ==='work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} 
                           style={{display: 'none'}} >
								<h2 className="major">Work</h2>
								<span className="image main"><img src={pic02} alt=""/></span>
								<p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
								<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
							{close}</article>
                            <article id="about" className = {`${props.article ==='about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
                           style ={{display: 'none'}}>
								<h2 className="major">About</h2>
								<span className="image main"><img src={pic03} alt=""/></span>
								<p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
							{close}</article>
                            
                            <article id="contact" className ={`${props.article ==='contact' ? 'active' : ''} ${props.articleTimeout?'timeout' : ''}`}
                            style ={{display: 'none'}}>
								<h2 className="major">Contact</h2>
								<form method="post" onSubmit = {onSubmit}>
									<div className="fields">
										<div className="field half">
											<label htmlFor="name">Name</label>
											<input type="text" name="name" id="name" value={formData.name}
								onChange={onChange} />
										</div>
										<div className="field half">
											<label htmlFor="email">Email</label>
											<input type="text" name="email" id="email" value={formData.email}
								onChange={onChange}/>
										</div>
										<div className="field">
											<label htmlFor="message">Message</label>
											<textarea name="message" id="message" rows="4" value={formData.message}
								onChange={onChange}></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><input type="submit" value={` ${loading ? 'Sending....' : 'Send Message'  }`} className="primary"/></li>
										<li><input type="reset" value="Reset"/></li>
									</ul>
								</form>
								<ul className="icons">
            <li>
              <a
                href="https://twitter.com/olanetsoft"
                className="icon fa-twitter"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/olanetsoft"
                className="icon fa-github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@olanetsoft"
                className="icon fa-medium"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/olubisiidris"
                className="icon fa-facebook"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/olanetsoft"
                className="icon fa-instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/olubisi-idris-ayinde-05727b17a/"
                className="icon fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                {' '}
              </a>
            </li>
          </ul>
					{close}</article>
    </div>
)
}

export default Main;
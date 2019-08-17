import React from 'react';
import '../../styles/components/Footer.scss'

import {faFacebookF, faGooglePlusG, faTwitter, faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Footer = ({info}) => {

  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__content__item">
              <h2>{info[0]}</h2>
              <p>2215 John Faniel Drive <br/> Clark, MO 65243</p>
            </div>
            <div className="footer__content__item">
              <h2>{info[1]}</h2>
              <div className="icon-wrapper">
                <a href="/" className="icon">
                  <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="/" className="icon">
                  <FontAwesomeIcon icon={faGooglePlusG}/>
                </a>
                <a href="/" className="icon">
                  <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="/" className="icon">
                  <FontAwesomeIcon icon={faLinkedinIn}/>
                </a>
                <a href="/" className="icon">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
            </div>
            <div className="footer__content__item">
              <h2>{info[2]}</h2>
              <p>Freelance is a free to use, open source <br/> Bootstrap theme created by <a className="item-span" href="https://nowhere.com">Start Bootstrap.</a></p>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <small> Copyright &copy; Your Website {new Date().getFullYear()}</small>
        </div>
      </section>
    </>
  )
};

export default Footer;

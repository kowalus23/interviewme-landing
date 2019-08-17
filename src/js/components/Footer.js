import React from 'react';
import '../../styles/components/Footer.scss'

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
                <div className="icon"/>
                <div className="icon"/>
                <div className="icon"/>
                <div className="icon"/>
                <div className="icon"/>
              </div>
            </div>
            <div className="footer__content__item">
              <h2>{info[2]}</h2>
              <p>Freelance is a free to use, open source <br/> Bootstrap theme created by <a className="item-span" href="">Start Bootstrap</a></p>
            </div>
          </div>
        </div>
        <div className="copyrights">
          Copyright Worldwide 2018
        </div>
      </section>
    </>
  )
};

export default Footer;

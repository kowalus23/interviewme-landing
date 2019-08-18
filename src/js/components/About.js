import React from 'react';

import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import '../../styles/components/About.scss'

const About = ({info}) => {
  const {title, contentText, downloadFile} = info;
  const text = contentText.map((text, i) => <p className="mob-center" key={i}>{text}</p>);

  return (
    <>
      <section className="about">
        <div className="container">
          <div className="about__content">
            <h2 className="about__content__title">
              {title.toUpperCase()}
            </h2>
            <div className="star-content">
              <div className="star-content__star"/>
            </div>
            <div className="about__content__description">
              {text}
            </div>
            <a className="about__content--button" href={downloadFile} download>
              <FontAwesomeIcon style={{marginRight: '14px', fontSize: '0.8em'}} icon={faDownload}/>
              Download now!
            </a>
          </div>
        </div>
      </section>
    </>
  )
};

export default About;

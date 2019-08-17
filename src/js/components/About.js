import React from 'react';
import '../../styles/components/About.scss'

const About = ({info}) => {
  const {title, contentText, downloadFile} = info;
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
              <p></p>
              <p></p>
            </div>
            <a className="about__content--button" href={downloadFile} download>
              <i className="fas fa-download"></i> Download now!
            </a>
          </div>
        </div>
      </section>
    </>
  )
};

export default About;

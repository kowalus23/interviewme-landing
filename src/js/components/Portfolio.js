import React from 'react';
import '../../styles/components/Portfolio.scss'

const Portfolio = ({info}) => {
  const {title, cards} = info;
  const card = cards.map(({title, id, img, redirect, temporaryStyle}) => {
    return (
      <a href={redirect} key={id} data-title={title}>
        <div className="card" style={temporaryStyle}>
          <div className="img-wrapper" style={img.tempStyle}>
            <img src={img.src} alt={title} />
          </div>
        </div>
      </a>
    )
  });

  return (
    <>
      <section id="Portfolio" className="portfolio">
        <div className="container">
          <div className="portfolio__content">
            <h2 className="portfolio__content__title">{title.toUpperCase()}</h2>
            <div className="star-content">
              <div className="star-content__star"/>
            </div>
            <div className="portfolio__content__card-wrapper">
              {card}
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Portfolio;

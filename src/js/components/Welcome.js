import React from 'react';
import '../../styles/components/Welcome.scss';

const Welcome = ({info}) => {
  const {title, additional} = info;
  const description = additional.join(' - ');

  return (
    <>
      <section className="section-welcome">
        <div className="container">
          <div className="section-welcome__content">
            <h2 className="section-welcome__content__title">
              {title}
            </h2>
            <div className="star-content">
              <div className="star-content__star"/>
            </div>
            <div className="section-welcome__content__description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Welcome;

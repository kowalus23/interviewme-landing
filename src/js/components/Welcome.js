import React from 'react';
import '../../styles/components/Welcome.scss';
import placeholderImg from '../../assets/placeholder.png';

const Welcome = ({info}) => {
  const {title, additional} = info;
  const description = additional.join(' - ');

  return (
    <>
      <section className="welcome">
        <div className="container">
          <div className="welcome__content">
            <div className="welcome__content__avatar">
              <img src={placeholderImg} alt="avatar"/>
            </div>
            <h1 className="welcome__content__title mob-center">
              {title.toUpperCase()}
            </h1>
            <div className="star-content">
              <div className="star-content__star"/>
            </div>
            <div className="welcome__content__description mob-center">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Welcome;

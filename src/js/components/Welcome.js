import React from 'react';

const Welcome = ({info}) => {
  const {title, additional} = info;
  console.log(additional)
  return (
    <>
      <section className="section-welcome">
        <div className="container">
          <div className="section-welcome__content">
            <h2 className="section-welcome__content__title">
              {title}
            </h2>
            <div className="star-wrapper">
              <div className="star-content">
                <div className="star-content--star"/>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
};

export default Welcome;

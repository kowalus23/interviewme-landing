import React from 'react';
import '../../styles/components/Navigation.scss'

const Navigation = ({info}) => {
  const {title, sections} = info;
  const section = sections.map(section => {
    return <li key={section}>{section}</li>
  });

  return (
    <>
      <section className="section-navigation">
        <div className="container">
          <div className="section-navigation__content">
            <h2 className="section-navigation__content__title">{title.toUpperCase()}</h2>
            <ul className="section-navigation__content__sections">
              {section}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
};

export default Navigation;

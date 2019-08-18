import React from 'react';
import '../../styles/components/Navigation.scss'

const Navigation = ({info}) => {
  const {title, sections} = info;
  const section = sections.map(section => {
    return <li  key={section}><a href={`#${section}`}>{section.toUpperCase()}</a></li>
  });

  return (
    <>
      <section className="navigation">
        <div className="container">
          <div className="navigation__content">
            <h2 className="navigation__content__title">{title.toUpperCase()}</h2>
            <ul className="navigation__content__sections">
              {section}
            </ul>
            <div className="navigation__content__menu">
              <input type="checkbox" className="navigation__content__menu--toggle"/>
              <div className="navigation__content__menu--hamburger"><div/></div>
              <div className="navigation__content__menu--overlay">
                <div>
                  <div>
                    <ul>
                      {section}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default Navigation;

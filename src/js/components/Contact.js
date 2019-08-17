import React, {useState} from 'react';
import '../../styles/components/Contact.scss'

const Footer = ({info}) => {
  const {title} = info;
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [message, setMessage] = useState({});

  const handleOnChange = ({target}) => {
    if (target.getAttribute('name') === 'name') {
      setName(target.value);
    } else if (target.getAttribute('name') === 'email') {
      setEmail(target.value);
    } else if (target.getAttribute('name') === 'phone') {
      setPhone(target.value);
    } else if (target.getAttribute('name') === 'message') {
      setMessage(target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    })
      .then(() => form.getAttribute('action'))
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="contact__content">
            <h2 className="contact__content__title">{title.toUpperCase()}</h2>
            <div className="star-content">
              <div className="star-content__star"/>
            </div>
            <form className="custom-form" action="/" onSubmit={handleSubmit}>
              <div className="custom-form__content">
                <input name="name" type="text" placeholder="Name" onChange={handleOnChange} required={true}/>
                <input name="email" type="email" placeholder="Email Address" onChange={handleOnChange} required={true}/>
                <input name="phone" type="tel" placeholder="Phone Number" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" onChange={handleOnChange} required={true}/>
                <textarea name="message" placeholder="Message" rows={5} onChange={handleOnChange}/>
              </div>
              <input className="custom-from--button" type="submit" value="Send"/>
            </form>
          </div>
        </div>
      </section>
    </>
  )
};

export default Footer;

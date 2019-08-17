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
            <h2>{title}</h2>
            <div className="star-content">
              <div className="star-content__star"/>
            </div>
            <form action="/" onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Name" onChange={handleOnChange}/>
              <input name="email" type="email" placeholder="Email Address" onChange={handleOnChange}/>
              <input name="phone" type="text" placeholder="Phone Number" onChange={handleOnChange}/>
              <textarea name="message" placeholder="Message" cols="30" rows="10" onChange={handleOnChange}/>
              <input type="submit"/>
            </form>
          </div>
        </div>
      </section>
    </>
  )
};

export default Footer;

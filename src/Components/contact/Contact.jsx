import React from 'react';
import styles from './Contact.module.css';
import Dropdown from '../dropdown/Dropdown';
import MailIcon from '../../assets/MailIcon';
import WhatsIcon from '../../assets/WhatsappIcon';

const opts = [
  {
    text: '(51) 98914-0371',
    link: 'https://api.whatsapp.com/send?phone=5551598914037',
    icon: <WhatsIcon />,
  },
  {
    text: 'gabrielcmajeski@gmail.com',
    link: 'mailto:gabrielcmajeski@gmail.com.br',
    icon: <MailIcon />,
  },
];

const Contact = () => {
  return (
    <>
      <aside className={styles.aside}>
        <Dropdown data={opts} custom={false} text={'contatos'}></Dropdown>
      </aside>
      <section className={styles.container}>
        <form action="">
          <label htmlFor="">_nome</label>
          <input type="text" />
          <label htmlFor="">_email</label>
          <input type="text" />
          <label htmlFor="">_mensagem</label>
          <input type="text" />
          <input type="button" value="" />
        </form>

        <div>
          <h1>TEXTO</h1>
        </div>
      </section>
    </>
  );
};

export default Contact;

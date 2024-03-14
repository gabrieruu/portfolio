import React from 'react';
import styles from './Contact.module.css';
import Dropdown from '../dropdown/Dropdown';
import MailIcon from '../../assets/MailIcon';
import WhatsIcon from '../../assets/WhatsappIcon';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../form/Input';
import { FORM_POST } from '../../api';
import CodeBlock from './CodeBlock';
import FormSent from './FormSent';
import { useState } from 'react';

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
  const firstName = useForm('');
  const email = useForm('email');
  const [msgSent, setMsgSent] = useState(true);
  const { error, loading, request } = useFetch();
  const [message, setMessage] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const body = new FormData();
    body.append('name', firstName.value);
    body.append('email', email.value);
    body.append('message', message);
    const { url, options } = FORM_POST(body);
    const { response } = await request(url, options);
    if (response.ok) {
      setMsgSent(true);
      firstName(null);
    }
  }

  return (
    <>
      <aside className={styles.aside}>
        <Dropdown data={opts} custom={false} text={'contatos'}></Dropdown>
      </aside>
      <div className={styles.container}>
        {msgSent ? (
          <FormSent setMsgSent={setMsgSent} />
        ) : (
          <form onSubmit={handleSubmit} className="animeLeft">
            <Input
              label={'_nome:'}
              type="text"
              name="name"
              {...firstName}
            ></Input>
            <Input
              label={'_email:'}
              type="text"
              name="email"
              {...email}
            ></Input>
            <div>
              <label htmlFor="message">_mensagem:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                onChange={({ target }) => setMessage(target.value)}
              ></textarea>
            </div>
            {loading ? (
              <button disabled>Enviando...</button>
            ) : (
              <button>Enviar</button>
            )}
          </form>
        )}
        <CodeBlock
          email={email}
          firstName={firstName}
          message={message}
        ></CodeBlock>
      </div>
    </>
  );
};

export default Contact;

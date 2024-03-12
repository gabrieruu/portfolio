import React from 'react';
import styles from './Contact.module.css';
import Dropdown from '../dropdown/Dropdown';
import MailIcon from '../../assets/MailIcon';
import WhatsIcon from '../../assets/WhatsappIcon';
import useForm from '../../Hooks/useForm';
import Input from '../form/Input';

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
  const date = new Date();
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };
  const firstName = useForm('');
  const email = useForm('email');
  const [message, setMessage] = React.useState('');

  console.log();

  return (
    <>
      <aside className={styles.aside}>
        <Dropdown data={opts} custom={false} text={'contatos'}></Dropdown>
      </aside>

      <form action="" className="animeLeft">
        <Input
          label={'_nome:'}
          type="text"
          name="firstName"
          {...firstName}
        ></Input>
        <Input label={'_email:'} type="text" name="email" {...email}></Input>
        <div>
          <label htmlFor="message">_mensagem:</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            onChange={({ target }) => setMessage(target.value)}
          ></textarea>
        </div>
        <button>enviar</button>
      </form>

      <code
        className={'animeRight'}
        style={{ counterReset: 'line', color: '#4D5BCE' }}
      >
        <span data-line style={{ color: '#4D5BCE' }}>
          <span style={{ color: '#E99287' }}>const </span>
          button<span style={{ color: '#E99287' }}> = </span>
          document.querySelector(
          <span style={{ color: '#FEA55F' }}>'#sendBtn'</span>);
        </span>
        <span data-line>
          <span style={{ color: '#E99287' }}>const </span> message
          <span style={{ color: '#E99287' }}> = </span> &#123;
        </span>
        <span data-line>
          <span> name:</span>{' '}
          <span style={{ color: '#FEA55F' }}>"{firstName.value}"</span>,
        </span>
        <span data-line>
          <span> email:</span>{' '}
          <span style={{ color: '#FEA55F' }}>"{email.value}"</span>,
        </span>
        <span data-line>
          <span> message:</span>{' '}
          <span style={{ color: '#FEA55F' }}>"{message}"</span>,
        </span>
        <span data-line>
          <span style={{ color: 'gray' }}> date: </span>
          {}
          <span style={{ color: '#FEA55F' }}>
            "{date.toLocaleDateString('pt-BR', options).replace('.', '')}"
          </span>
        </span>
        <span data-line>&#125;</span>
        <span data-line> </span>
        <span data-line>
          button.addEventListener('
          <span style={{ color: '#FEA55F' }}>'click'</span>'), ()
          <span style={{ color: '#E99287' }}> =&#62;</span> &#123;
        </span>
        <span data-line> form.send(message);</span>
        <span data-line>&#125;)</span>
      </code>
    </>
  );
};

export default Contact;

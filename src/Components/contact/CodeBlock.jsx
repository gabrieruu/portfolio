import React from 'react';
import styles from './CodeBlock.module.css';

const CodeBlock = ({ email, firstName, message }) => {
  const date = new Date();
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  };
  return (
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
  );
};

export default CodeBlock;

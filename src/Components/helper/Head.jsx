import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | Gabriel Majeski';
    document
      .querySelector("meta[name='description']")
      .setAttribute('contet', props.description || '');
  }, [props]);
  return <></>;
};

export default Head;

import React from 'react';

const Select = ({ data, setLongitude, setLatitude }) => {
  const [select, setSelect] = React.useState('');

  if (data)
    return (
      <form>
        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
        >
          <option value="" disabled>
            Selecione...
          </option>
          {data.map((city) => (
            <option
              value={city.name}
              key={city.name}
            >{`${city.name}, ${city.uf}`}</option>
          ))}
        </select>
      </form>
    );
  else return null;
};

export default Select;

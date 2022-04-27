import { useState, useEffect } from 'react';

const colors = {
  Grass: '78C850',
  Poison: 'A040A0',
  Fire: 'F08030',
  Flying: '7794E6',
  Water: '6890F0',
  Bug: 'A8B820',
  Normal: 'A8A788',
  Electric: 'F8D030',
  Ground: 'E0C068',
  Fairy: 'EE99AC',
  Fighting: 'C03028',
  Psychic: 'F85888',
  Rock: 'B8A038',
  Steel: 'C3C2D8',
  Ice: '98D8D8',
};

const TypeText = ({ types }) => {
  const [typeColor, setColor] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    if (types.length === 1) {
      setColor(`#${colors[types[0]]}`);
      setType(`${types[0]}`);
    } else if (types.length === 2) {
      setColor(`#${colors[types[0]]} #${colors[types[1]]}`.toLowerCase());
      setType(`${types[0]}🤍${types[1]}`);
    }
  }, [types]);

  return (
    <>
      <div className='type-text' style={{ color: typeColor }}>
        {type}
      </div>
    </>
  );
};

export default TypeText;

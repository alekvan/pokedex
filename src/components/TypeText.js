import { useState, useEffect } from 'react';
import '../index.css';

const TypeText = ({ types, typeColorData }) => {
  const [typeColor, setColor] = useState([]);
  const [type, setType] = useState([]);

  useEffect(() => {
    if (types.length === 1) {
      setColor([typeColorData[types[0]]]);
      setType([types[0]]);
    } else if (types.length === 2) {
      setColor([typeColorData[types[0]], typeColorData[types[1]]]);
      setType([types[0], types[1]]);
    }
  }, [types, typeColorData]);

  return (
    <>
      {types.length === 1 && (
        <span className='type-text' style={{ color: `#${typeColor[0]}` }}>
          {type}
        </span>
      )}
      {types.length === 2 && (
        <span className='type-text' style={{ color: `#${typeColor[0]}` }}>
          {type[0]} 🔘
          <span style={{ color: `#${typeColor[1]}` }}> {type[1]}</span>
        </span>
      )}
    </>
  );
};

export default TypeText;

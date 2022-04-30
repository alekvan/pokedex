import React from 'react';

const ButtonType = ({ pokeTypes, buttonColors, setFilter }) => {
  let pokemonTypes = [];

  pokeTypes.forEach((pokemonData) => {
    if (pokemonData.type.length < 2) {
      if (
        !pokemonTypes.includes(pokemonData.type[0]) &&
        pokemonData.type[0] !== undefined
      ) {
        pokemonTypes.push(pokemonData.type[0]);
      }
    } else {
    }
    if (
      !pokemonTypes.includes(pokemonData.type[0]) &&
      pokemonData.type[0] !== undefined
    ) {
      pokemonTypes.push(pokemonData.type[0]);
    }
    if (
      !pokemonTypes.includes(pokemonData.type[1]) &&
      pokemonData.type[1] !== undefined
    ) {
      pokemonTypes.push(pokemonData.type[1]);
    }
  });

  return (
    <>
      <button
        className='category-button'
        value='all'
        onClick={(e) => setFilter(e.target.value)}
      >
        All
      </button>
      {pokemonTypes.sort().map((type) => (
        <button
          className='category-button'
          style={{ backgroundColor: `#${buttonColors[type]}` }}
          value={type}
          onClick={(e) => {
            setFilter(e.target.value);
          }}
        >
          {type}
        </button>
      ))}
    </>
  );
};

export default ButtonType;

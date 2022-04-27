import React, { useState, useEffect } from 'react';
import TypeText from './TypeText';

function PokemonCard() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch('https://pokeindex-metergram.herokuapp.com/')
      .then((res) => {
        return res.json();
      })
      .then((data) => setPokeList(data.pokemon));
  }, []);
  // const defaultImg =
  //   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png';

  // const [pokemons, setPokemons] = useState([]);
  // const [pokemonImg, setPokemonImg] = useState(defaultImg);
  // const [pokemonType, setPokemonType] = useState('grass');

  // useEffect(() => {
  //   const loadPost = async () => {
  //     const pokeNames = await axios.get('https://pokeapi.co/api/v2/pokemon');

  //     setPokemons(pokeNames.data.results);
  //   };

  //   loadPost();
  // }, []);

  return (
    // <div className='PokemonCardGrid'>
    //   {pokemons.map((pokemon) => (
    //     <div className='PokemonCard'>
    //       <div className='img-container'>
    //         <img src={pokemonImg} alt='random shit' />
    //       </div>
    //       <div className='pokemon-info'>
    //         <h2>
    //           {pokemon.name} <img src='gray_dot.svg' alt='img' /> {pokemonType}
    //         </h2>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className='card-grid'>
      {pokeList.map((pokemon) => {
        return (
          <div className='card' key={pokemon.id}>
            <div className='card-left'>
              <div className='pokemon-name-img'>
                <div className='pokemon-img'>
                  <img src={pokemon.image} alt='pokemon img' />
                </div>
                <div className='pokemon-name'>
                  <span>{pokemon.name}</span>
                </div>
              </div>
              <div className='pokemon-type'>
                <TypeText types={pokemon.type} />
              </div>
            </div>
            <div className='card-right'>
              <div className='pokemon-stat'></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonCard;

import './App.css';
import PokemonCard from './components/PokemonCard';
import { useEffect, useState } from 'react';
// import FilterTypes from './components/FilterTypes';
import ButtonType from './components/ButtonType';

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [filterPokemonType, setFilterPokemonType] = useState('all');

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
    Ghost: 'B400A9',
    Dragon: 'EA9B48',
  };

  useEffect(() => {
    const test = () => {
      fetch('https://pokeindex-metergram.herokuapp.com/')
        .then((res) => {
          return res.json();
        })
        .then((data) => setPokeList(data.pokemon));
    };

    test();
  }, []);

  const filteredPokemonList = pokeList.filter((pokemons) => {
    return (
      pokemons.type[0] === filterPokemonType ||
      pokemons.type[1] === filterPokemonType
    );
  });

  return (
    <div className='App'>
      <div className='categories-buttons'>
        <h1>Filter by type</h1>
        <ButtonType
          pokeTypes={pokeList}
          buttonColors={colors}
          setFilter={setFilterPokemonType}
        />
      </div>
      <div className='card-grid'>
        {filterPokemonType === 'all' && (
          <PokemonCard pokemonData={pokeList} colors={colors} />
        )}

        {filterPokemonType !== 'all' && (
          <PokemonCard pokemonData={filteredPokemonList} colors={colors} />
        )}
      </div>
    </div>
  );
}

export default App;

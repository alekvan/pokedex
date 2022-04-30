import ProgressBar from './ProgressBar';

const PokemonTypes = ({ stats }) => {
  let pokemonStatNames = Object.keys(stats);
  let pokemonStatNumbers = Object.values(stats);

  return (
    <div className='pokemon-stats'>
      <div className='pokemon-stats-names'>
        {pokemonStatNames.map((statName) => (
          <div
            className='pokemon-stats-names-li'
            style={{
              color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            }}
          >
            {statName}
          </div>
        ))}
      </div>
      <div className='pokemon-stats-numbers'>
        {pokemonStatNumbers.map((statValue) => (
          <div className='pokemon-stats-numbers-li'>{statValue}</div>
        ))}
      </div>
      <div className='pokemon-stats-bars'>
        <ProgressBar barValue={pokemonStatNumbers} />
      </div>
    </div>
  );
};

export default PokemonTypes;

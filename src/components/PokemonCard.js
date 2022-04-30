import PokemonStats from './PokemonStats';
import TypeText from './TypeText';

function PokemonCard({ pokemonData, colors }) {
  return (
    <>
      {pokemonData.map((pokemon) => {
        return (
          <div className='card' key={pokemon.id}>
            <div className='card-left'>
              <img src={pokemon.image} alt='pokemon img' />
              <div className='pokemon-id'>{`#${pokemon.id}`}</div>
              <div className='pokemon-name'>
                <span>{pokemon.name}</span>
              </div>
              <TypeText types={pokemon.type} typeColorData={colors} />
            </div>
            <div className='card-right'>
              <PokemonStats stats={pokemon.base} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PokemonCard;

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

// const [pokeList, setPokeList] = useState([]);

// useEffect(() => {
//   fetch('https://pokeindex-metergram.herokuapp.com/')
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => setPokeList(data.pokemon));
// }, []);
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

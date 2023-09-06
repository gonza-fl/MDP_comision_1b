import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

function Galery() {
  const [pokemons, setPokemons] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch(POKE_API_BASE_URL)
      .then((data) => data.json())
      .then((json) => setPokemons(json.results))
      .catch((err) => alert(err));
  }, []);
  async function getPokemon(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setPokemon({
        name: json.name,
        sprite: json.sprites.front_default,
        id: json.id,
        weight: json.weight,
      });
    } catch (error) {
      alert('Error', error);
    }
  }
  return (
    <main className='main'>
      {pokemon && (
        <PokemonCard
          sprite={pokemon.sprite}
          id={pokemon.id}
          name={pokemon.name}
          weight={pokemon.weight}
        />
      )}
      <ul>
        {pokemons?.map((pokemon, i) => (
          <li key={i} onClick={() => getPokemon(pokemon.url)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Galery;

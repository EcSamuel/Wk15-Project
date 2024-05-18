import React, { useState, useEffect } from 'react';
import axios from 'axios';

const POKEMON_ENDPOINT1 = 'https://pokeapi.co/v2/pokemon'
const POKEMON_ENDPOINT2 = 'https://pokeapi.co/v2/pokemon/35/'
// 4:51 in the refactor walkthrough!// 
class PokeAPI {
  get = async () => {
    const resp = await fetch(POKEMON_ENDPOINT2);
    const data = await resp.json();
    return data;
  } catch(e) {
    console.log(`PokeAPI doesn't want to play nicely right now`);
  }
}

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        setPokemon(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;

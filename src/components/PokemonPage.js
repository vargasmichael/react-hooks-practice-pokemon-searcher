import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setpokemon] = useState([])
  //set state after the fetch to have that ready


 useEffect(() => {
  fetch("http://localhost:3001/pokemon")
  .then((response) => response.json())
  .then((pokemon) => setpokemon(pokemon));
  console.log(pokemon)
  }, [])
//set up the fetch and useEffect first so we can get the pokemon array 
//useEffect set up to keep the page from rendering a million times
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection 
      pokemon = {pokemon}
      />
    </Container>
  );
}

export default PokemonPage;

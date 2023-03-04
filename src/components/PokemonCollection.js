import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const cards = pokemon.map((poke) => 
  //map through each poke
    <PokemonCard key={poke.id} pokemon={poke}/>
    //pokemon get passed up from pokemon card

  )
  return <Card.Group itemsPerRow={6}> {cards}</Card.Group>
  //got rid of the <h1> element as it did no show up on the example
    
  
}

export default PokemonCollection;

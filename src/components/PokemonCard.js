import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  //these are the props that we need to render
  const {name, sprites, hp} = pokemon 
  //identified the name, sprites, and hp as pokemon to render. 
  //this will be passed up to collection in the <PokemonCard /> 
  return (
    <Card>
      <div>
        <div className="image">
          <img src={sprites} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} 
          </span>
        </div>
      </div>
    </Card>
  );
}



export default PokemonCard;


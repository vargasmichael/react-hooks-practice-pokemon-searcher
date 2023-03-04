import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [showfront, setshowfront] = useState(true)
  //these are the props that we need to render
  const {name, sprites, hp} = pokemon 
  //identified the name, sprites, and hp as pokemon to render. 
  //this will be passed up to collection in the <PokemonCard /> 

function handleClick(){
  setshowfront((showfront) => !showfront)
  
}

  return (
    <Card>
      <div>
        <div onClick={handleClick}>
          {/* added the on click and used handClick to trigger the click event */}
        <div className="image">
          <img src={showfront ? sprites.front : sprites.back} alt={name} />
          {/* this was a hard one */}
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
      </div>
    </Card>
  );
}



export default PokemonCard;


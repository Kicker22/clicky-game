import React, { Component } from "react";
import characters from '../characters.json'




 
class CharacterCard extends Component {
  state={
    characters
  }

  render(){
    return (
      <div className='card'>
        <div className='img-container'>
          <img src={props.image} alt={props.name} onClick={console.log('stuiff')} />
        </div>
      </div>
    );
  }
}
export default CharacterCard;

    



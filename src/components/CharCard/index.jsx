import React from "react";
import characters from '../../characters.json'

const imgStyle = {
    height:"200px",
    width:"200px",
    border: "1px solid white"
}

const cardStyle = {
    background:'transparent',
    width:'fit-content'
}



function CharCard(props) {
  return (
    <div className="card" style={cardStyle} onClick={() => props.setClicked(props.id)}>
      <div className="img-container">
        <img style={imgStyle}alt={props.name} src={props.image}/>
      </div>
    </div>
  );

}

export default CharCard;
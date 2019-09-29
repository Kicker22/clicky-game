import React from "react";

const imgStyle = {
    height:"200px",
    width:"200px",
    border: "2px dashed red"
}

const cardStyle = {
    background:'transparent',
    width:'fit-content'
}



const CharCard = props => (
    <div onClick={() => props.setClicked(props.id)} className="card ml-3 mb-3"  style={cardStyle}>
      <div className="img-container">
        <img style={imgStyle} alt={props.name} src={props.image}/>
      </div>
    </div>
)

export default CharCard;
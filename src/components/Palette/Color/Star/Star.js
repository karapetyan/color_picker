import React from 'react';
import '../Star/Star.css';

const Star = ({ id, number, selected, onRate, onOverStar, onOutStar }) =>
    <div className = { selected ? "StarDefault StarSelected" : "StarDefault"} onClick = { () => onRate(id, number + 1) } onMouseOver = { () => onOverStar(id, number + 1) } onMouseOut = { () => onOutStar(id) }>{number + 1}</div>

export default Star;
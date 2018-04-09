import React from 'react';

const ShowTitle = ({id, title, editHint, onTitleEdit, onSetEditHint }) =>
    <div>
        <h2 onClick = { () => onTitleEdit(id) } onMouseOver = { () => onSetEditHint(id, true) } onMouseOut = { () => onSetEditHint(id, false) }>{title}</h2>
        <span style={ editHint ? { display: "block" } : { display: "none" } }>click to edit!</span>
    </div> 

export default ShowTitle;
import React from 'react';
import '../Color/Color.css';
import Star from './Star/Star';
import Title from './Title/Title'

const Color = ({ state, callBacks, onRemove }) => 
    state.show ?
    <div id={ state.id }>
        <Title state={state} callBacks={callBacks} editingNow = {state.title.editingNow}/>
        <div className="Color" style={ { backgroundColor: state.color } }></div>
        { [...Array(state.totalStars)].map((item, i) => 
            <Star key={i} id={state.id} number = {i} selected = { i < state.starsSelected ? true : false  } onRate = { callBacks.onRate } onOverStar = { callBacks.onOverStar } onOutStar = { callBacks.onOutStar } />
        )}
        <div>{state.starsSelected} of {state.totalStars} stars</div>
        <button onClick={() => onRemove(state.id)}>Remove</button>
    </div> : null

export default Color;
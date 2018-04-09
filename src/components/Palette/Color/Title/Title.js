import React from 'react';
import EditTitle from './EditTitle/EditTitle';
import ShowTitle from './ShowTitle/ShowTitle';

const Title = ({ state, callBacks, editingNow }) =>
    (editingNow) ? 
    <EditTitle id = {state.id} title = {state.title.value} onTitleUpdate = {callBacks.onTitleUpdate} /> : 
    <ShowTitle id = {state.id} title = {state.title.value} editHint = {state.title.editHint} onTitleEdit = {callBacks.onTitleEdit} onSetEditHint = {callBacks.onSetEditHint} />

export default Title;
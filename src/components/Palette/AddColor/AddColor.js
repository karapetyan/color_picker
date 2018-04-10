import React from 'react';

const AddColor = ({onAddColor, show}) => {

    let _title, _color;
    
    const submit = e => {
        e.preventDefault();
        onAddColor(_title.value, _color.value);
        _title.value = 'Color title';
        _color.value='';
        _title.focus();
    }

    return (
        show ? 
        <form onSubmit={submit} >
            <input ref={input => _title = input} type="text" defaultValue="Color title"/> 
            <input ref={input => _color = input} type="color" defaultValue="Color name"/>
            <button>Add</button>
        </form>
        : null
    )
}

export default AddColor;
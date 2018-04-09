import React from 'react';

const EditTitle = ({id, title, onTitleUpdate}) => {
    let _title;
    const submit = e => {
        e.preventDefault();
        onTitleUpdate(id, _title.value);
    }

return (
    <form onSubmit={ submit }>
        <input ref={ input => _title = input } type="text" placeholder="Color title" defaultValue={title} required />
        <button>Save</button>
    </form>
)
}

export default EditTitle;
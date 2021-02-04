import React from 'react';

const Searchbox = ({searchfield, SearchChange}) => {
    return (
        <div className='pa2'>
        <input
        className='pa-3 ba b--green'
        type="search" 
        placeholder="search robots"
        onChange={SearchChange}
        />
        </div>
    );
}

export default Searchbox;
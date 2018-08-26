import React from 'react';

import classes from './SearchBox.css';

const searchBox = props => {
    return <input className={classes.Input} onChange={props.change} type='text' placeholder='Type your search!' />
}

export default searchBox;
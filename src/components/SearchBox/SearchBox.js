import React from 'react';

import Classes from './SearchBox.css';
import Aux from '../../hoc/Aux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch)

const searchBox = props => {
    return (
        <Aux>
            <input className={Classes.Input} onChange={props.change} type='text' placeholder='Type your search!'/>
            <button className={Classes.Button} onClick={props.clicked}><FontAwesomeIcon icon="search" /></button>
        </Aux>
    )
}

export default searchBox;
import React from 'react';
import { useParams } from 'react-router-dom';
import { IRouteId } from '../../types/IRouteId';

const WordDelete = () => {

    // get the router params from the hook
    let {id} = useParams() as IRouteId;

    return (
        <div>Word Delete ID: {id}</div>
    );
}

export default WordDelete;
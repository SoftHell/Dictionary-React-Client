import React from 'react';
import { useParams } from 'react-router-dom';
import { IRouteId } from '../../types/IRouteId';

const ActivityTypeEdit = () => {

    // get the router params from the hook
    let {id} = useParams() as IRouteId;

    return (
        <div>Activity Type Edit ID: {id}</div>
    );
}

export default ActivityTypeEdit;
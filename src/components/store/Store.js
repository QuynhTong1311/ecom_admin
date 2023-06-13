import React from 'react'

import useAsync from '../../hooks/useAsync';
import StoreServices from '../../services/StoreServices';

const Store = () => {

    const { data } = useAsync(StoreServices.getAllStore);

    return (
        <>
            {data.map((parent) => (
                <option key={parent._id} value={parent.name}>
                    {parent.name}
                </option>
            ))}
        </>
    )
}

export default Store
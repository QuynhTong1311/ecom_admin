import React from 'react'

import useAsync from '../../hooks/useAsync';
import BrandServices from '../../services/BrandServices';

const Brand = () => {

    const { data } = useAsync(BrandServices.getAllBrand);

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

export default Brand
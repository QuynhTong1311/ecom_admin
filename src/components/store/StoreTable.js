import React from 'react'
import { TableBody, TableRow, TableCell, Avatar } from '@windmill/react-ui';

import MainModal from '../modal/MainModal';
import MainDrawer from '../drawer/MainDrawer';
import ShowHideButton from '../table/ShowHideButton';
import StoreDrawer from '../drawer/StoreDrawer';
import useToggleDrawer from '../../hooks/useToggleDrawer';
import EditDeleteButton from '../table/EditDeleteButton';

const StoreTable = ({ stores }) => {

    const { serviceId, handleModalOpen, handleUpdate } = useToggleDrawer();

    return (
        <>
            <MainModal id={serviceId} />
            <MainDrawer>
                <StoreDrawer id={serviceId} />
            </MainDrawer>

            <TableBody>
                {stores?.map((parent) => (
                    <TableRow key={parent._id}>
                        <TableCell className="font-semibold uppercase text-xs">
                            {parent._id.substring(20, 24)}
                        </TableCell>
                        <TableCell>
                            <Avatar
                                className="hidden mr-3 md:block bg-gray-50 p-1"
                                src={parent.icon}
                                alt={parent.name}
                            />
                        </TableCell>

                        <TableCell className="font-medium text-sm">
                            {parent.name}
                        </TableCell>
                        <TableCell className="font-medium text-sm">
                            {parent.city}
                        </TableCell>
                        <TableCell className="font-medium text-sm">
                            {parent.address}
                        </TableCell>
                        <TableCell className="font-medium text-sm">
                            {parent.phone}
                        </TableCell>
                        <TableCell>
                            <ShowHideButton id={parent._id} status={parent.status} />
                        </TableCell>
                        <TableCell>
                            <EditDeleteButton
                                id={parent._id}
                                handleUpdate={handleUpdate}
                                handleModalOpen={handleModalOpen}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </>
    )
}

export default StoreTable
import React from 'react'
import Scrollbars from 'react-custom-scrollbars';

import Error from '../form/Error';
import Title from '../form/Title';
import InputArea from '../form/InputArea';
import LabelArea from '../form/LabelArea';
import DrawerButton from '../form/DrawerButton';
import Uploader from '../image-uploader/Uploader';
import useStoreSubmit from '../../hooks/useStoreSubmit';

const StoreDrawer = ({ id }) => {

    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
        imageUrl,
        setImageUrl,
    } = useStoreSubmit(id);

    return (
        <>
            <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {id ? (
                    <Title
                        title="Update Store"
                        description="Updated your Product store and necessary information from here"
                    />
                ) : (
                    <Title
                        title="Add Store"
                        description=" Add your Product store and necessary information from here"
                    />
                )}
            </div>
            <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Store Icon" />
                            <div className="col-span-8 sm:col-span-4">
                                <Uploader imageUrl={imageUrl} setImageUrl={setImageUrl} />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Store Name" />
                            <div className="col-span-8 sm:col-span-4">
                                <InputArea
                                    register={register}
                                    label="Store title"
                                    name="name"
                                    type="text"
                                    placeholder="Store title"
                                />
                                <Error errorName={errors.name} />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="City" />
                            <div className="col-span-8 sm:col-span-4">
                                <InputArea
                                    register={register}
                                    label="city"
                                    name="city"
                                    type="text"
                                    placeholder="City"
                                />
                                <Error errorName={errors.name} />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Address" />
                            <div className="col-span-8 sm:col-span-4">
                                <InputArea
                                    register={register}
                                    label="address"
                                    name="address"
                                    type="text"
                                    placeholder="Address"
                                />
                                <Error errorName={errors.name} />
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <LabelArea label="Contact Number" />
                            <div className="col-span-8 sm:col-span-4">
                                <InputArea
                                    register={register}
                                    label="Contact Number"
                                    name="phone"
                                    type="text"
                                    placeholder="Phone number"
                                />
                                <Error errorName={errors.phone} />
                            </div>
                        </div>
                    </div>

                    <DrawerButton id={id} title="Store" />
                </form>
            </Scrollbars>
        </>
    )
}

export default StoreDrawer
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import BrandServices from '../services/BrandServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useBrandSubmit = (id) => {

    const [imageUrl, setImageUrl] = useState('');
    const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors },
    } = useForm();

    const onSubmit = ({ name }) => {
        if (!imageUrl) {
            notifyError('Icon is required!');
            return;
        }
        const brandData = {
            name: name,
            icon: imageUrl,
        };

        if (id) {
            BrandServices.updateBrand(id, brandData)
                .then((res) => {
                    setIsUpdate(true);
                    notifySuccess(res.message);
                })
                .catch((err) => notifyError(err.message));
            closeDrawer();
        } else {
            BrandServices.addBrand(brandData)
                .then((res) => {
                    setIsUpdate(true);
                    notifySuccess(res.message);
                })
                .catch((err) => notifyError(err.message));
            closeDrawer();
        }
    };

    useEffect(() => {
        if (!isDrawerOpen) {
            setValue('name');
            setImageUrl('');
            clearErrors('name');
            return;
        }
        if (id) {
            BrandServices.getBrandById(id)
                .then((res) => {
                    if (res) {
                        setValue('name', res.name);
                        setValue('icon', res.icon);
                        setImageUrl(res.icon);
                    }
                })
                .catch((err) => {
                    notifyError('There is a server error!');
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, setValue, isDrawerOpen]);

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
        imageUrl,
        setImageUrl
    };

}

export default useBrandSubmit;
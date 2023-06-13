import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SidebarContext } from '../context/SidebarContext';
import StoreServices from '../services/StoreServices';
import { notifyError, notifySuccess } from '../utils/toast';

const useStoreSubmit = (id) => {
  const [imageUrl, setImageUrl] = useState('');
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, city, address, phone }) => {
    if (!imageUrl) {
      notifyError('Icon is required!');
      return;
    }
    const storeData = {
      name: name,
      city: city,
      address: address,
      phone: phone,
      icon: imageUrl,
    };

    if (id) {
      StoreServices.updateStore(id, storeData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess(res.message);
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else {
      StoreServices.addStore(storeData)
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
      setValue('city');
      setValue('address');
      setValue('phone');
      setImageUrl('');
      clearErrors('name');
      clearErrors('city');
      clearErrors('address');
      clearErrors('phone');
      return;
    }
    if (id) {
      StoreServices.getStoreById(id)
        .then((res) => {
          if (res) {
            setValue('name', res.name);
            setValue('name', res.city);
            setValue('name', res.address);
            setValue('name', res.phone);
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
    setImageUrl,
  };
};

export default useStoreSubmit;
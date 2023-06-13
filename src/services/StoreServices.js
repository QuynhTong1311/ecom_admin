import requests from './httpService';

const StoreServices = {
    getAllStore() {
        return requests.get('/store');
    },

    getStoreById(id) {
        return requests.get(`/store/${id}`);
    },

    addStore(body) {
        return requests.post('/store/add', body);
    },

    updateStore(id, body) {
        return requests.put(`/store/${id}`, body);
    },

    updateStatus(id, body) {
        return requests.put(`/store/status/${id}`, body);
    },

    deleteStore(id, body) {
        return requests.patch(`/store/${id}`, body);
    },
}

export default StoreServices
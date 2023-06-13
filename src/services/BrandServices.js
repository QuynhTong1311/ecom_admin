import requests from './httpService';

const BrandServices = {
    getAllBrand() {
        return requests.get('/brand');
    },

    getBrandById(id) {
        return requests.get(`/brand/${id}`);
    },

    addBrand(body) {
        return requests.post('/brand/add', body);
    },

    updateBrand(id, body) {
        return requests.put(`/brand/${id}`, body);
    },

    updateStatus(id, body) {
        return requests.put(`/brand/status/${id}`, body);
    },

    deleteBrand(id, body) {
        return requests.patch(`/brand/${id}`, body);
    },
}

export default BrandServices
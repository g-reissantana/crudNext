import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const api = {

    async getAllContacts() {
        const response = await instance.get('getContacts');
        return response.data;
    },
    async getContactById(id) {
        const response = await instance.get(`getContactById/${id}`);
        return response.data;
    },
    async deleteContact(id) {
        instance.delete(`deleteContact/${id}`);
    },
    async addContact(data) {
        try {
            instance.post('addContact',data);
        } catch(err) {
            console.error('Recebaa: '+err);
            return false;
        }
    },
    async editContact(data) {
        try {
            instance.put('editContact', data);
        } catch(err) {
            console.log(err);
        }
    }
    
};
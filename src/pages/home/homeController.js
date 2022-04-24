import { api } from '../../services/api';

export const homeController = {
    
    async getAllContacts(setAllContacts) {
        const response = await api.getAllContacts();
        setAllContacts(response);
        return response;
    },
    async deleteContact(id) {
        const response = await api.deleteContact(id);
        return response;
    },
    async addContact(inputValues) {
        const newContact = {
            name: inputValues.name,
            email: inputValues.email,
            phone: inputValues.phone,
            instagram: inputValues.instagram,
            github: inputValues.github
        }
        api.addContact(newContact);
        return newContact;
    }

};
import { api } from "../../services/api";

export const showController = {

    async getContactById(id, navigate, setContact) {
        const response = await api.getContactById(id);
        const contact = await response[0];
        if(contact === undefined) {
            // navigate('/');
            return false;
        }
        setContact(contact);
        return contact;
    },
    async editContact(editValues) {
        try {
            await api.editContact(editValues);
        } catch(err) {
            console.log('Error: ', err);
        }
    },

}
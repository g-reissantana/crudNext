import React, { useEffect, useState } from 'react';

// Styles
import * as C from './style';
import { GlobalStyle } from '../../globalStyles';

// Components
import { ListItem } from '../../components/ListItem';
import { homeController } from './homeController';
import { AddModal } from '../../components/AddModal';

// Icons
import { IoMdAdd } from 'react-icons/io'


export const Home = () => {

    const [allContacts, setAllContacts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showBtnAdd, setShowBtnAdd] = useState(true);

    useEffect(() => {
        homeController.getAllContacts(setAllContacts);
    }, []);

    const addContact = async(inputValues) => {
        const newContact = await homeController.addContact(inputValues);
        const maxId = await allContacts.reduce((prev, current) => {
            return (prev.id > current.id) ? prev : current;
        })
        newContact.id = await maxId.id + 1;
        let newList = [...allContacts];
        newList.push(newContact);
        setAllContacts(newList);
    }

    const deleteContact = async(id) => {
        if(id <= 1) {
            return alert('Você pode apenas editar esse item.')
        }
        await homeController.deleteContact(id);
        homeController.getAllContacts(setAllContacts)
    }

    function listContacts() {
        const list = allContacts.map(item => {
            return (
                <ListItem 
                    key={item.id} 
                    id={item.id}
                    name={item.name} 
                    phone={item.phone} 
                    email = {item.email}
                    instagram = {item.instagram}
                    github = {item.github}
                    deleteContact={deleteContact}
                    setShowBtnAdd={setShowBtnAdd}
                />
            )
        })
        
        return list;
    }


    return(
        <>
            <GlobalStyle/>
            <AddModal addContact={addContact} showModal={showModal} setShowModal={setShowModal} />
            <C.Container modal={showModal}>
                <C.TitleContainer>Lista de Contatos</C.TitleContainer>
                <C.BoxContact>
                    {allContacts && listContacts()}
                </C.BoxContact>
                {allContacts.length == 1 && <C.ListVoidText>Nenhum contato Cadastrado</C.ListVoidText>}
            </C.Container>
            {showBtnAdd &&
                <C.AddContactBtn onClick={() => setShowModal(!showModal)}>
                    <IoMdAdd color='#fff'/>
                </C.AddContactBtn>
            }
        </>
    )
}
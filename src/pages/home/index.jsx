import React, { useEffect, useState } from 'react';

// Styles
import * as C from './style';
import { GlobalStyle } from '../../globalStyles';

// Components
import { ListItem } from '../../components/ListItem';

// Icons
import { IoMdAdd } from 'react-icons/io'
import { AddModal } from '../../components/AddModal';
import { homeController } from './homeController';


export const Home = () => {

    const [allContacts, setAllContacts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showBtnAdd, setShowBtnAdd] = useState(true);

    useEffect(() => {
        
        homeController.getAllContacts(setAllContacts);
        
    }, []);

    const addContact = async(inputValues) => {
        const newContact = await homeController.addContact(inputValues);
        if(allContacts.length > 0) {
            const maxId = await allContacts.reduce((prev, current) => {
                return (prev.id > current.id) ? prev : current;
            })
            newContact.id = maxId.id + 1;
            let newList = [...allContacts];
            newList.push(newContact);
            setAllContacts(newList);
        } else {
            let newList = [...allContacts];
            newList.push(newContact);
            setAllContacts(newList);
            const maxId = await allContacts.reduce((prev, current) => {
                return (prev.id > current.id) ? prev : current;
            })
            newList = [...allContacts];
        }
    }

    const deleteContact = (id) => {
        homeController.deleteContact(id);
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
                {allContacts.length == 0 && <C.ListVoidText>Nenhum contato Cadastrado</C.ListVoidText>}
                <C.BoxContact>
                    {allContacts && listContacts()}
                </C.BoxContact>
            </C.Container>
            {showBtnAdd &&
                <C.AddContactBtn onClick={() => setShowModal(!showModal)}>
                    <IoMdAdd color='#fff'/>
                </C.AddContactBtn>
            }
        </>
    )
}
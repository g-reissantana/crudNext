import React, { useState } from 'react';
import * as C from './style';

import { AiOutlineClose, AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineInstagram, AiOutlineGithub, AiOutlineSave } from 'react-icons/ai';

export const AddModal = ({addContact, showModal, setShowModal}) => {

    const initialStateInput = {
        name: '',
        email: '',
        phone: '',
        instagram: '',
        github: ''
    };
    
    const [inputValues, setInputValues] = useState(initialStateInput);

    const handleInputChange = (value) => {
        setInputValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value
        }));
    }

    const handleClickCloseModal = () => {
        setShowModal(!showModal);
        setInputValues(initialStateInput);
    }

    const handleClickSubmit = async(e) => {
        for(const item in inputValues) {
            if(!inputValues[item]) {
                return alert('Por favor, preencha todos os dados!')
            }
        }
        await addContact(inputValues);
        setShowModal(!showModal);
    }

    return(
        <>
            {showModal && 
                <C.Container showModal={showModal}>
                    <C.ModalBox>
                        <C.Contact>
                            <h1>Adicionar Contato</h1>
                            <C.FormEdit method='POST' action='https://localhost:3001/getContacts'>
                                
                                <label className="name">
                                    <AiOutlineUser/>
                                    <input 
                                        type="text" 
                                        placeholder="Nome"
                                        name="name"
                                        onChange={handleInputChange}
                                    />
                                </label>

                                <label className="phone">
                                    <AiOutlinePhone/>
                                    <input 
                                        type="number" 
                                        placeholder="Telefone"
                                        name="phone"
                                        onChange={handleInputChange}
                                    />
                                </label>

                                <label className="email">
                                    <AiOutlineMail/>
                                    <input 
                                        type="email" 
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleInputChange}
                                    />
                                </label>


                                <label className="instagram">
                                    <AiOutlineInstagram/>
                                    <input 
                                        type="text" 
                                        placeholder="Instagram"
                                        name="instagram"
                                        onChange={handleInputChange}
                                    />
                                </label>

                                <label className="github">
                                    <AiOutlineGithub/>
                                    <input 
                                        type="text" 
                                        placeholder="Usuário no Github"
                                        name="github"
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <C.FormActions>
                                    <C.FormActionBtn onClick={e => handleClickSubmit(e)} bg='#1fb04f' width='18rem' fSize='2rem'>
                                        <AiOutlineSave color='#fff'/>
                                        <h3>Adicionar</h3>
                                    </C.FormActionBtn>
                                    <C.FormActionBtn onClick={handleClickCloseModal} bg='red' width='10rem' fSize='1.5rem'>
                                        <AiOutlineClose className='btnCancel' color='#fff'/>
                                        <h3>Fechar</h3>
                                    </C.FormActionBtn>
                                </C.FormActions>
                            </C.FormEdit>
                        </C.Contact>
                    </C.ModalBox>
                </C.Container>
            }
        </>
    )
}
import React, { useState } from 'react';
import * as C from './style';

import {GlobalStyle} from '../../globalStyles';

import { AiOutlineClose, AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineInstagram, AiOutlineGithub, AiOutlineSave, AiOutlineEdit } from 'react-icons/ai';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { Avatar } from '../Avatar';
import { Link } from 'react-router-dom';

export const ContactsModal = ({contact, showModalContacts, setShowModalContacts}) => {

    const [activeEdit, setActiveEdit] = useState(false);

    return(
        <>
            <GlobalStyle hidden="hidden"/>
            {showModalContacts && 
                <C.Container>
                    <C.ModalBox>
                        <C.Contact>
                            {activeEdit &&
                                <C.CloseModalBtn onClick={() => {
                                    setShowModalContacts(!showModalContacts)
                                    if(activeEdit) {
                                        setActiveEdit(!activeEdit);
                                    }
                                }}>
                                    <AiOutlineClose color='#fff' />
                                </C.CloseModalBtn>
                            }
                            <div className='avatar'>
                                <Avatar width='8rem' height='8rem' src={'https://github.com/g-reissantana.png'}/>
                            </div>

                            {!activeEdit &&
                                <C.FormEdit>
                                    <div className="dataContact">
                                        <AiOutlineUser/>
                                        <h1>{contact.name}</h1>
                                    </div>
                                    <div className="dataContact">
                                        <AiOutlinePhone/>
                                        <h1>{contact.phone}</h1>
                                    </div>
                                    <div className="dataContact">
                                        <AiOutlineMail/>
                                        <h1>{contact.email}</h1>
                                    </div>
                                    <div className="dataContact instagram">
                                        <Link to=''>
                                            <AiOutlineInstagram/>
                                            <h1>{contact.instagram}</h1>
                                        </Link>
                                    </div>
                                    <div className="dataContact github">
                                        <Link to=''>
                                            <AiOutlineGithub/>
                                            <h1>{contact.github}</h1>
                                        </Link>
                                    </div>
                                    <C.FormActions>
                                        <C.FormActionBtn onClick={() => setActiveEdit(!activeEdit)} bg='#0A66C2' width='15rem' fSize='2rem'>
                                            <AiOutlineEdit color='#fff'/>
                                            <h3>Editar</h3>
                                        </C.FormActionBtn>
                                        <C.FormActionBtn onClick={() => setShowModalContacts(!showModalContacts)} bg='red' width='10rem' fSize='1.5rem'>
                                            <AiOutlineClose className="btnCancel" color='#fff'/>
                                            <h3>Fechar</h3>
                                        </C.FormActionBtn>
                                    </C.FormActions>
                                </C.FormEdit>
                            }

                            { activeEdit && 
                                <C.FormEdit>
                                    <label className="name">
                                        <AiOutlineUser/>
                                        <input 
                                            type="text" 
                                            value={contact.name}
                                        />
                                    </label>

                                    <label className="phone">
                                        <AiOutlinePhone/>
                                        <input 
                                            type="number" 
                                            placeholder="Telefone"
                                            value={contact.phone}
                                        />
                                    </label>

                                    <label className="email">
                                        <AiOutlineMail/>
                                        <input 
                                            type="text" 
                                            placeholder="Email"
                                            value={contact.email}
                                        />
                                    </label>


                                    <label className="instagram">
                                        <AiOutlineInstagram/>
                                        <input 
                                            type="text" 
                                            placeholder="Instagram"
                                            value={contact.instagram}
                                        />
                                    </label>

                                    <label className="github">
                                        <AiOutlineGithub/>
                                        <input 
                                            type="text" 
                                            placeholder="Usuário no Github"
                                            value={contact.github}
                                        />
                                    </label>
                                    <C.FormActions>
                                        <C.FormActionBtn bg='#1fb04f' width='15rem' fSize='2rem'>
                                            <AiOutlineSave color='#fff'/>
                                            <h3>Salvar</h3>
                                        </C.FormActionBtn>
                                        <C.FormActionBtn onClick={() => setActiveEdit(!activeEdit)} bg='red' width='10rem' fSize='1.5rem'>
                                            <BsArrowReturnLeft className="btnCancel" color='#fff'/>
                                            <h3>Voltar</h3>
                                        </C.FormActionBtn>
                                    </C.FormActions>
                                </C.FormEdit>
                            }

                        </C.Contact>
                    </C.ModalBox>
                </C.Container>
            }
        </>
    )
}
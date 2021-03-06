import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as C from './style';

// ICONS
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineReadMore } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';

import { Avatar } from '../Avatar';

export const ListItem = ({id, name, phone, github, deleteContact, setShowBtnAdd}) => {

    const [showModalDelete, setShowModalDelete] = useState(false);

    useEffect(() => {
        maskPhone();
    })

    const maskPhone = () => {
        const phoneNumber = phone;
        const ddd = phoneNumber.slice(0,2);
        const nineDigit = phoneNumber.slice(2,3);
        const firstPart = phoneNumber.slice(3,7);
        const lastPart = phoneNumber.slice(7,11);
        
        return `(${ddd}) ${nineDigit} ${firstPart}-${lastPart}`;
    };

    const handleClickDelete = () => {
        setShowModalDelete(!showModalDelete);
        setShowBtnAdd(showModalDelete);
    }

    
    const handleClickCancel= () => {
        setShowModalDelete(!showModalDelete);
        setShowBtnAdd(showModalDelete);
    }
    
    const handleClickDeleteConfirm = async() => {
        await deleteItem();
        await setShowModalDelete(!showModalDelete);
        await setShowBtnAdd(showModalDelete);
    }

    const deleteItem = () => {
        deleteContact(id);
    }

    return(
        <>
            {showModalDelete && <C.ModalDelete>
                <div className="modalBox">
                    <h4>Deseja excluir?</h4>
                    <h2>{name}</h2>
                    <C.FormActions>
                        <C.FormActionBtn onClick={handleClickCancel} bg='#23CF5C' width='15rem' fSize='1.7rem'>
                            <AiOutlineClose color='#fff'/>
                            <h3>Cancelar</h3>
                        </C.FormActionBtn>
                        <C.FormActionBtn onClick={handleClickDeleteConfirm} bg='red' width='10rem' fSize='1.5rem'>
                            <MdOutlineDelete className="btnCancel" color='#fff'/>
                            <h3>Excluir</h3>
                        </C.FormActionBtn>
                    </C.FormActions>
                    <p>N??o ser?? poss??vel recuperar esse dado</p>
                </div>
            </C.ModalDelete>
            }

            <C.Container>
                <C.Info>
                    <Avatar  width='6.8rem' height='6.8rem' src={`https://github.com/${github}.png`}/>
                    <C.Texts>
                        <h1>{name}</h1>
                        <p>{maskPhone()}</p>
                    </C.Texts>
                </C.Info>
                
                <C.Actions>
                    <Link to={`showContact?id=${id}`}>
                        <MdOutlineReadMore title="Ver Contato" className="enter"/>
                    </Link>
                    {id > 1 && <MdOutlineDelete onClick={() => handleClickDelete()} title="Apagar Contato" className="delete"/>}
                </C.Actions>
            </C.Container>
            <C.Line />
        </>
    )
};
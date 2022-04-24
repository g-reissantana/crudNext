import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { showController } from './showController';

// STYLES
import * as C from './style';
import {GlobalStyle} from '../../globalStyles';

// ICONS
import { AiOutlineClose, AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineInstagram, AiOutlineGithub, AiOutlineSave, AiOutlineEdit } from 'react-icons/ai';
import { BsArrowReturnLeft } from 'react-icons/bs';

// COMPONENTS
import { Avatar } from '../../components/Avatar';
import { Loading } from '../../components/Loading';


export const ShowContact = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    // if(!id) {
    //     navigate('/');
    // }
    
    useEffect(() => {
        async function cloneContac() {
            const data = await showController.getContactById(id, navigate, setContact);
            setEditValues({
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                instagram: data.instagram,
                github: data.github
            })
        }
        cloneContac();
    }, [])

    const [contact, setContact] = useState({});
    const [editValues, setEditValues] = useState();
    const [activeEdit, setActiveEdit] = useState(false);

    const handleChangeValues = (value) => {
        setEditValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value
        }));
    }

    const handleClickSubmit = async() => {
        for(const item in editValues) {
            if(editValues[item] === '' || editValues[item] === undefined) {
                return alert('Por favor, preencha todos os campos!');
            };
        };
        await showController.editContact(editValues);
        navigate('/');
    }

    const maskPhone = () => {
        if(contact.phone) {
            const phone = contact.phone;
            const ddd = phone.slice(0,2);
            const nineDigit = phone.slice(2,3);
            const firstPart = phone.slice(3,7);
            const lastPart = phone.slice(7,11);
            
            return `(${ddd}) ${nineDigit} ${firstPart}-${lastPart}`;
        }
    };

    return(
        <>
            {editValues === undefined && <Loading/>}
            <GlobalStyle/>
            <C.Container>
                <C.ModalBox>
                    <C.Contact>
                        {activeEdit && 
                            <Link to={'/'}>
                                <C.CloseBtn>
                                    <AiOutlineClose color='#fff'/>
                                </C.CloseBtn>
                            </Link>
                        }
                        <div className='avatar'>
                            <Avatar width='8rem' height='8rem' src={`https://github.com/${contact.github}.png`}/>
                        </div>

                        {!activeEdit &&
                            <C.FormEdit>
                                <div className="dataContact">
                                    <AiOutlineUser/>
                                    <h1>{contact.name}</h1>
                                </div>
                                <div className="dataContact">
                                    <AiOutlinePhone/>
                                    <h1>{maskPhone()}</h1>
                                </div>
                                <div className="dataContact">
                                    <AiOutlineMail/>
                                    <h1>{contact.email}</h1>
                                </div>
                                <div className="dataContact instagram">
                                    <a target="_blank" rel="noreferrer" href={`https://www.instagram.com/${contact.instagram}`}>
                                        <AiOutlineInstagram/>
                                        <h1>{contact.instagram}</h1>
                                    </a>
                                </div>
                                <div className="dataContact github">
                                    <a target="_blank" rel="noreferrer" href={`https://github.com/${contact.github}`}>
                                        <AiOutlineGithub/>
                                        <h1>{contact.github}</h1>
                                    </a>
                                </div>
                                <C.FormActions>
                                    <C.FormActionBtn onClick={() => setActiveEdit(!activeEdit)} bg='#0A66C2' width='15rem' fSize='2rem'>
                                        <AiOutlineEdit color='#fff'/>
                                        <h3>Editar</h3>
                                    </C.FormActionBtn>
                                    <Link to={'/'}>
                                        <C.FormActionBtn bg='red' width='10rem' fSize='1.5rem'>
                                            <AiOutlineClose className="btnCancel" color='#fff'/>
                                            <h3>Fechar</h3>
                                        </C.FormActionBtn>
                                    </Link>
                                </C.FormActions>
                            </C.FormEdit>
                        }

                        { activeEdit && 
                            <C.FormEdit>
                                <label className="name">
                                    <AiOutlineUser/>
                                    <input 
                                        type="text" 
                                        placeholder="Nome"
                                        name="name"
                                        defaultValue={contact.name}
                                        onChange={handleChangeValues}
                                    />
                                </label>

                                <label className="phone">
                                    <AiOutlinePhone/>
                                    <input 
                                        type="number" 
                                        placeholder="Telefone"
                                        name="phone"
                                        defaultValue={contact.phone}
                                        onChange={handleChangeValues}
                                    />
                                </label>

                                <label className="email">
                                    <AiOutlineMail/>
                                    <input 
                                        type="text" 
                                        placeholder="Email"
                                        name="email"
                                        defaultValue={contact.email}
                                        onChange={handleChangeValues}
                                    />
                                </label>


                                <label className="instagram">
                                    <AiOutlineInstagram/>
                                    <input 
                                        type="text" 
                                        placeholder="Instagram"
                                        name="instagram"
                                        defaultValue={contact.instagram}
                                        onChange={handleChangeValues}
                                    />
                                </label>

                                <label className="github">
                                    <AiOutlineGithub/>
                                    <input 
                                        type="text" 
                                        placeholder="Usuário no Github"
                                        name="github"
                                        defaultValue={contact.github}
                                        onChange={handleChangeValues}
                                    />
                                </label>
                                <C.FormActions>
                                    <C.FormActionBtn onClick={handleClickSubmit} bg='#1fb04f' width='15rem' fSize='2rem'>
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
        </>
    )
}
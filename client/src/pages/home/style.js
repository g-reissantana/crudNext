import styled from 'styled-components';

export const Bg = styled.div`
    width: 100vw;
    min-height: 100vh;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    position: fixed;

    background-color: red;
`

export const Container = styled.main`

    width: 100vw;
    min-height: 100vh;

    background: #f2f2f2;
    transition: 0.1s;
    filter: ${props => props.modal ? 'blur(4px)' : 'blur(0)'};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const TitleContainer = styled.h4`

    margin-top: 2rem;

    font-size: 4rem;
    font-weight: 600;
    font-family: 'Poppins';

    color: rgba(0, 0, 0, .9);

    @media(max-width: 450px) {
        font-size: 3rem;
    }
`

export const ListVoidText = styled.h5`

    margin-top: 3.5rem;

    font-size: 2rem;
    font-weight: 400;
    font-family: 'Poppins';

    color: rgba(0, 0, 0, .8);
`

export const BoxContact = styled.div`
    width: 80vw;
    max-width: 70rem;

    height: 100%;

    margin: 3rem 0;

    box-shadow: rgb(0 0 0 / 30%) -2px 2px 8px;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #fff;

    @media(max-width: 400px) {
        width: 95vw;
    }
`

export const AddContactBtn = styled.div`
    width: 5.7rem;
    height: 5.7rem;

    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 0;

    margin: 0 5rem 5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 3.6rem;
        height: 3.6rem;
    }
    
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 30%) -2px 2px 8px;

    background: rgb(31, 176, 79);

    transition: .3s;
    cursor: pointer;

    :hover {
        filter: brightness(1.2);
        transform: scale(1.1);
    }

    @media(max-width: 900px) {
        width: 5rem;
        height: 5rem;

        margin: 0 2rem 2rem;

    }
    @media(max-width: 600px) {
        width: 4rem;
        height: 4rem;

        margin: 0 2rem 2rem;

    }

`
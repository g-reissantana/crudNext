import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, .8);
`

export const ModalBox = styled.div`
    width: 90%;
    max-width: 70rem;
    height: 90vh;

    background: #fff;

    border-radius: 3rem;
    box-shadow: rgb(0 0 0 / 30%) -2px 2px 8px;

    position: relative;
`

export const CloseBtn = styled.div`
    width: 3rem;
    height: 3rem;

    position: absolute;
    top: 0;
    right: 0;

    margin: 2rem 3rem 0;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 2rem;
        height: 2rem;

        cursor: pointer;
    }
    
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 30%) -2px 2px 8px;

    background: red;

    transition: .3s;
    cursor: pointer;

    :hover {
        transform: scale(1.1);
    }

`

export const Contact = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 2rem;

    padding: 2rem;

    border-radius: 3rem;

    h1 {
        font-size: 3.5rem;
        font-weight: 500;

        letter-spacing: 1px;
        text-align: center;
    }

    .avatar {
        align-self: center;

        @media(max-width: 500px) {
            img {
                width: 8rem;
                height: 8rem;
            }
        }
    }

`

const iconAnimation = keyframes`
    0% {
        transform: scale(1);
    } 50% {
        transform: scale(1.02);
    } 100% {
        transform: scale(1);
    }
`

export const FormEdit = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        color: rgba(0,0,0, .8);
    }

    label, .dataContact {
        width: 80%;

        display: flex;
        align-items: center;

        height: 5rem;

        margin: 1rem 0;

        &:first-child {
            margin-top: 0;
        }

        svg {
            width: 3rem;
            height: 3rem;

            margin-right: 1.5rem;
        }

        input {
            width: 100%;
            padding: 1rem;

            font-family: 'Poppins';

            &[type=number]::-webkit-inner-spin-button { 
                -webkit-appearance: none;
            }
    
            &[type=number] { 
                -moz-appearance: textfield;
                appearance: textfield;
            }
        }

        @media(max-width: 500px) {
            width: 95%;

            h1 {
                font-size: 1rem;
            }
        }
    }
       

    .dataContact{
        border-radius: 5px;
        border: solid 2px #767676;

        padding: 2px 10px;

        box-shadow: rgb(0 0 0 / 30%) -2px 2px 8px;

        &.instagram {
            animation: ${iconAnimation} 1.5s ease-in-out infinite;

            background: linear-gradient(145deg, #3051F1 10%, #C92BB7 70%);
            /* display: none; */
            border: 0;
            svg,h1 {
                color: #fff;
            }
        }

        &.github {
            background: linear-gradient(145deg, #042b65 10%, #461F48 70%);

            animation: ${iconAnimation} 1.5s ease-in-out infinite;
            border: 0;
            svg,h1 {
                color: #fff;
            }
        }

        a {
            width: 100%;
            height: 100%;

            display: flex;
            align-items: center;
            text-decoration: none;
        }
        
        svg {
            margin-right: 2rem;
        }

        h1 {
            font-size: 2rem;
            font-family: 'Poppins';
            color: rgba(0,0,0, .8);
        }

        @media(max-width: 500px) {
            h1 {
                font-size: 1.5rem;
            }

            svg {
                margin-right: .8rem;
            }
        }

    }

`

export const FormActions = styled.div`
    width: 100%;

    padding: 2rem 1rem 1rem 1rem;

    display: flex;
    gap: 2rem;
    justify-content: center;

    a {
        text-decoration: none;
    }

    @media(max-width: 500px) {
        gap: .8rem;
        padding: 1.5rem 1rem 1rem 1rem;
    }

`
export const FormActionBtn = styled.button`

    width: ${props => props.width};
    height: 6rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    color: #f2f2f2;
    background: ${props => props.bg};

    border: none;
    border-radius: 1rem;

    transition: .1s;

    box-shadow: rgb(0 0 0 / 30%) -2px 2px 8px;
    
    cursor: pointer;

    svg {
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 1rem;

        transition: .1s;

        &.btnCancel {
            width: 2.6rem;
            height: 2.6rem;
            margin-right: .5rem;
        }

    }

    h3 {
        font-family: 'Poppins';
        font-weight: 500;
        font-size: ${props => props.fSize};
        letter-spacing: 1px;
    }

    :hover {
        filter: brightness(1.2);
        transform: scale(1.05);

        svg {
            width: 2.6rem;
            height: 2.6rem;
        }
    }

    @media(max-width: 500px) {
        width: 12rem;

        padding: 1rem;
    }

`
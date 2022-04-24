import styled from 'styled-components';

export const Container = styled.div`

    width: 90%;
    height: 10rem;

    margin: 0 auto 1rem auto;

    display: flex;
    align-items: center;

    color: rgba(0,0,0, .8);
    background-color: #fff;

    border-radius: 1rem;

`

export const ModalDelete = styled.div`
    display: flex;
    justify-content: center;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    .modalBox {
        width: 90%;
        max-width: 40rem;
        height: 50%;
        height: 40rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        
        padding: 5rem 0 3rem 0;
        margin-top: 10rem;
        
        border-radius: 2rem;
        
        background-color: #fff;

        h2 {
            font-size: 5rem;
            color: rgba(0, 0, 0, .9);
        }
        h4 {
            font-size: 2.9rem;
            color: rgba(0, 0, 0, .7);
        }
        p {
            text-align: center;
            font-size: 1.8rem;
            max-width: 80%;
        }
    }

    background-color: rgba(0, 0, 0, .8);
`

export const Info = styled.div`
    flex: 4;

    display: flex;
`

export const Texts = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .7rem;

    color: rgba(0,0,0,.8);

    h1 {
        font-size: 2.3rem;
        font-weight: 500;
        letter-spacing: .5px;
        text-transform: capitalize;
    }

    p {
        font-size: 1.3rem;
    }
    
    @media(max-width: 450px) {
        h1 {
            font-size: 1.9rem;
        }

        p {
            font-size: 1.3rem;
        }
    }
`


export const Actions = styled.div`
    flex: 2;

    width: 42rem;
    height: 4rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    a {
        color: none;
    }

    svg {
        cursor: pointer;
        transition: .3s;
        color: rgba(0,0,0, .8);

        :hover {
            transform: scale(1.2);
        }

        &.enter {
            width: 4rem;
            height: 4rem;


            &:hover {
                color: #0A66C2;
            }
        }
    
        &.delete {
            width: 3rem;
            height: 3rem;


            &:hover {
                color: red;
            }
        }
    }

    @media screen and (max-width: 900px) { 
        svg {
            cursor: pointer;
            transition: .3s;
            color: rgba(0,0,0, .8);

            :hover {
                transform: none;
            }

            &.enter {
                width: 4.1rem;
                height: 4.1rem;

                color: #0A66C2;
            }
        
            &.delete {
                width: 2.9em;
                height: 2.9rem;
                color: red;
            }
        }
    }

    @media(max-width:450px) {
        width: 3rem;
        height: 3rem;
        
        svg {
            cursor: pointer;
            transition: .3s;
            color: rgba(0,0,0, .8);

            &.enter {
                width: 4.1rem;
                height: 4.1rem;
            }
        
            &.delete {
                width: 2.9em;
                height: 2.9rem;
            }
        }
        
    }

`

export const Line = styled.hr`
    :not(:last-child) {
        height: .5px;
        width: 90%;
    }
`
export const FormActions = styled.div`
    width: 100%;

    padding: 2rem 1rem 1rem 1rem;

    display: flex;
    gap: 2rem;
    justify-content: center;

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

`
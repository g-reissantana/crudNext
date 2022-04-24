import styled from 'styled-components';

export const Avatar = styled.img`

    width: ${props => props.width};
    height: ${props => props.height};

    margin-right: 1.5rem;

    border-radius: 50%;

    @media(max-width: 450px) {
        width: 5.3rem;
        height: 5.3rem;
    }
`
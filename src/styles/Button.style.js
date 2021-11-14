import styled from 'styled-components';

export const Button = styled.button`
    width: 8rem;
    height: 2.7rem;
    background-color: #0000e6;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    transition: .5s;
    color: #ffffff;
    margin: 2px auto;
    font-size: 1.5rem;

    :hover {
        background-color: #0000b3;
        transform: scale(1.05);
        transition: .5s;
    }
`;
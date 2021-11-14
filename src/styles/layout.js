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

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px auto;
    max-width: 600px;
`;

export const Input = styled.input`
    display: flex;
    box-shadow: 1px 1px 1px 1px #0000ff;
`;

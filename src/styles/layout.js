import styled from 'styled-components';

export const StyledButton = styled.button`
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

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px auto;
    max-width: 600px;
`;

export const StyledInput = styled.input`
    display: flex;
    box-shadow: 1px 1px 1px 1px #0000ff;
`;

export const StyledLink = styled.a`
    color: #f0f0f0;
    text-transform: uppercase;
    font-size: 1.5rem;
    cursor: pointer;
    line-height: 1.65rem;
    list-style: none;
    text-decoration: none;
`;

export const StyledListItem = styled.li`
  color: #f0f0f0;
  text-transform: uppercase;
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1.65rem;
  list-style: none;
  text-decoration: none; 
  flex: 1 0 25%;
  padding: 5px;
`;

export const StyledList = styled.ul`
  max-height: 60%;
  font-size: 2rem;
  display: flex;
  flex-wrap: wrap;
`;
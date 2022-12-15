import styled from 'styled-components';

export const FiltrLabel = styled.label `margin-bottom:15px; 
display: flex;
flex-direction: column;
align-items: center;
`
export const FiltrInput = styled.input`
    padding-left: 10px;
    width: 300px;
    height: 40px;
margin-bottom:20px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
    @include transitions(border-color);
    cursor: pointer;
  
    &:focus,
    &:hover {
      border-color: var(--accent-color);
      outline: transparent;
    }
`;
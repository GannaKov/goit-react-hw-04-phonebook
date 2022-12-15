import styled from 'styled-components';

export const Form = styled.form`
  
  display: flex;
  flex-direction: column;    
  align-items: center;
`;
export const FormLabel = styled.label `margin-bottom:15px; 
display: flex;
flex-direction: column;
margin-bottom: 8px;
align-items:center;
`
export const FormInput = styled.input`
    padding-left: 10px;
    width: 300px;
    height: 40px;

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
export const ModalSubmitBtn=styled.button `
margin: 0 auto;
background-color:white;
  
&:focus,
&:hover {
  background-color: lightgreen;
  outline: transparent;
}`
  
  
  

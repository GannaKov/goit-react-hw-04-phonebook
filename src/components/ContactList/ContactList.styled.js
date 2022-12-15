import styled from 'styled-components';

 export const ContactList = styled.ul`
 display: flex;
 align-items: flex-start;
 flex-direction:column;
 gap: 10px;
 font-size: 20px;
 padding: 0;
 margin: 0;
`;
 


export const ContactListItem =styled.li`:not(:last-child){margin-bottom:8px}`
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

export const FiltrSubmitBtn=styled.button `
margin: 0 auto;
background-color:white;
  
&:focus,
&:hover {
  background-color: lightgreen;
  outline: transparent;
}`
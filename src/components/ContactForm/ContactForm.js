import React, { useState } from 'react';
import  {Form,FormInput,ModalSubmitBtn,FormLabel} from "components/ContactForm/ContactForm.styled"
import PropTypes from 'prop-types';



export const ContactForm =({onSubm})=> {

 const [name, setName] = useState(""); 
 const [number, setNumber] = useState(""); 

 const handleChange = evt => {
  
    const { name, value } = evt.target;
    
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return; 
  };
 }
 const  handleSubmit = evt => {
    evt.preventDefault();
console.log(name, number)
onSubm(name, number);
 reset();
}

  
  const reset = () => {
   setName("");
   setNumber("");
  };

    
    return (
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </FormLabel>
        <ModalSubmitBtn type="submit">Add Conract</ModalSubmitBtn>
      </Form>
    );
  }

ContactForm.propTypes ={
  onSubm:PropTypes.func,
  handleChange:PropTypes.func,

}
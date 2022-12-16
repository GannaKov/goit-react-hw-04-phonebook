//import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { useState,Component } from 'react'; 
//import React, { useState } from 'react';
import { GlobalStyle } from 'CreateGlobalStyle';
import { ContainerWrap } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Fiter/Filter';
import { Title } from './App.styled';
import { useLocalStorage } from 'hooks/useLokalStorage';

export const App = () => {
   const [contacts, setContacts] = useLocalStorage("contacts", []);
  // const [contacts, setContacts] = useState([]); 
  const [filter, setFilter] = useState(""); 


  const addContact = (name, number) => {
    
    const checkName = contacts
      .map(contact => contact.name.toLowerCase())
      .some(contact => contact === name.toLowerCase());
    if (!checkName) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
     
        setContacts ([newContact, ...contacts]);
    } else {
      window.alert(`${name} is already in contacts `);
    }
  };
  const deleteContact = contactId => {
    //setContacts(state => state.filter(contact => contact.id !== contactId),
   // );
    setContacts(contacts.filter(contact => contact.id !== contactId),
   );
  };
  
 const changeFilter = e => {
  setFilter(e.currentTarget.value );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }; 

  const visibleContacts = getVisibleContacts();
      return (
      <div 
style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}> 

       <GlobalStyle />
        <Title>Phonebook</Title>

        <ContainerWrap>
        <ContactForm
        onSubm={addContact}
       // handleChange={handleChange}
      />
    </ContainerWrap>
      <ContainerWrap title="Contacts">
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 && (
        <ContactsList
          contacts={visibleContacts}
         onDeleteContact={deleteContact}
        />
      )}
    </ContainerWrap>

      </div> 
      
     
    );
  } 
//-------------------
export class oldApp extends Component {
  state = {
    contacts: [],
    filter: '',
  };
 

 

  addContact = (name, number) => {
    const { contacts } = this.state;
    const checkName = contacts
      .map(contact => contact.name.toLowerCase())
      .some(contact => contact === name.toLowerCase());
    if (!checkName) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    } else {
      window.alert(`${name} is already in contacts `);
    }
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }; 

  componentDidMount(){const contacts=localStorage.getItem("contacts")
 
    const parselContacts=JSON.parse(contacts)
    if(parselContacts){this.setState({contacts:parselContacts})}
    
  }

componentDidUpdate(prevProps, prevState){if (this.state.contacts!==prevState.contacts){
  localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}}
  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div  style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101',
      }}>
        <GlobalStyle />
        <Title>Phonebook</Title>
        <ContainerWrap>
          <ContactForm
            onSubm={this.addContact}
            handleChange={this.handleChange}
          />
        </ContainerWrap>
        <ContainerWrap title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          {contacts.length > 0 && (
            <ContactsList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          )}
        </ContainerWrap>
      </div>
    );
  }
}


// export const App = () => { 
//   const [contacts, setContacts] = useState([]); 
//   const [filter, setFilter] = useState(""); 
//   const addContact = (name, number) => {
    
//     const checkName = contacts
//       .map(contact => contact.name.toLowerCase())
//       .some(contact => contact === name.toLowerCase());
//     if (!checkName) {
//       const newContact = {
//         id: nanoid(),
//         name,
//         number,
//       };
//       this.setState(prevState => ({
//         contacts: [newContact, ...prevState.contacts],
//       }));
//     } else {
//       window.alert(`${name} is already in contacts `);
//     }
//   };

//       return (
//       <div 
// style={{
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         color: '#010101',
//       }}> 

//        <GlobalStyle />
//         <Title>Phonebook</Title>
        
//         <ContactForm
//             onSubm={addContact}
//             handleChange={this.handleChange}/>
      





//       </div> 
      
     
//     );
//   }
 

  


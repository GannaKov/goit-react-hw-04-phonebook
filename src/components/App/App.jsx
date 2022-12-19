import { nanoid } from 'nanoid';
import { useState} from 'react'; 
import { GlobalStyle } from 'CreateGlobalStyle';
import { ContainerWrap } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Fiter/Filter';
import { Title } from './App.styled';
import { useLocalStorage } from 'hooks/useLokalStorage';

export const App = () => {
   const [contacts, setContacts] = useLocalStorage("contacts", null);
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
     
        setContacts (state=>[newContact, ...state]);
    } else {
      window.alert(`${name} is already in contacts `);
    }
  };
  const deleteContact = contactId => {
   
   setContacts(state => state.filter(contact => contact.id !== contactId))}
  
  
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




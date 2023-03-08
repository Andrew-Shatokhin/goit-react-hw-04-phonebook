import  {useState, useEffect  } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import Form from './Form/Form';
// import defaultContacts from 'contacts.json';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title, TitleSection } from './App.styled';

const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

export default function App() {
  const [contacts, setContacts] = useState(() => parsedContacts ?? []);
  const [filter, setFilter] = useState('');


  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));

    }, [contacts]);


 const addContacts = newContact => {
    if (contacts.some(
        item => item.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }
    setContacts(prevState => [...prevState, newContact]);
  };


  const addFilter = (e) => {
    setFilter(e.currentTarget.value)
  }

  const getFilteredContacts = () => {

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  const deleteContact = contactId => {
   setContacts(contacts.filter(contact => contact.id !== contactId))
  }


    return (
      <Layout>
        <Title>Phonebook</Title>
        <Form
          addContacts={addContacts}
        />
        <TitleSection>Contacts</TitleSection>
        <Filter value={filter} onChange={addFilter} />
        <Contacts contacts={getFilteredContacts()} onDelete={deleteContact} />

        <GlobalStyle />
      </Layout>
    );

}

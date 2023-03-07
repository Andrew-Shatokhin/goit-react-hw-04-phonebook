import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import Form from './Form/Form';
import defaultContacts from 'contacts.json';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title, TitleSection } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    // console.log('DidMount');
    const contacts = localStorage.getItem('contacts');
    // console.log(contacts);

    if (contacts !== null) {
      const parsedContacts = JSON.parse(contacts);
      // console.log(parsedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: defaultContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      // console.log('Обновилось поле');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = data => {
    // console.log(data);
  };

  addContacts = newContact => {
    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  addFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <Layout>
        <Title>Phonebook</Title>
        <Form
          onSubmit={this.formSubmitHandler}
          addContacts={this.addContacts}
        />
        <TitleSection>Contacts</TitleSection>
        <Filter value={this.state.filter} onChange={this.addFilter} />
        <Contacts contacts={filteredContacts} onDelete={this.deleteContact} />

        <GlobalStyle />
      </Layout>
    );
  }
}
const time = new Date().toLocaleTimeString();
console.log(time);

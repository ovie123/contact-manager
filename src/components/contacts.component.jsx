import React, { Component } from 'react';
import Contact from './contact.component';
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Ovie Ernest',
        email: 'Ernyovie@gmail.com',
        phone: '07032585124',
      },
      {
        id: 2,
        name: 'Atakpu Godson',
        email: 'godson@gmail.com',
        phone: '070325857808',
      },
      {
        id: 3,
        name: 'Roland Bryce',
        email: 'Roland@gmail.com',
        phone: '070325853564',
      },
    ],
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: newContacts,
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;

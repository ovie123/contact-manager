import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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

    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;

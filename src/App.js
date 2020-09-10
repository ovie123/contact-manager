import React from 'react';
import Contacts from './components/contacts/contacts.component';
import Header from './components/layout/header.component';
import AddContact from './components/contacts/AddContact';

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Provider>
      <div className='App'>
        <Header branding='Contact Manager' />
        <div className='container'>
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;

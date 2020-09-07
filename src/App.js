import React from 'react';
import Contacts from './components/contacts.component';
import Header from './components/header.component.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header branding='Contact Manager' />
      <div className='container'>
        <Contacts />
      </div>
    </div>
  );
}

export default App;

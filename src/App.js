import React from 'react';
import Contacts from './components/contacts.component';
import Header from './components/header.component.jsx';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Provider>
      <div className='App'>
        <Header branding='Contact Manager' />
        <div className='container'>
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;

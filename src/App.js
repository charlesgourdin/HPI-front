import React from 'react';
import './App.css';
import ChatBox from './pages/ChatBox';
import Accueil from './pages/Accueil';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocketProvider from './providers/SocketContext';
import { BrowserRouter, Route } from 'react-router-dom';
import Psychologue from './pages/Psychologue';

function App() {
  return (
    <div>
      <SocketProvider>
        <BrowserRouter>
          <Route exact path='/' component={Accueil} />
          <Route path='/psy' component={Psychologue} />
          <Route path='/chat' component={ChatBox} />
        </BrowserRouter>
      </SocketProvider>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import ChatBox from './pages/ChatBox';
import Accueil from './pages/Accueil';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocketProvider from './providers/SocketContext';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <SocketProvider>
        <BrowserRouter>
        <Route exact path='/' component={Accueil}/>
        <Route path='/chat' component={ChatBox}/>
        </BrowserRouter>
      </SocketProvider>
    </div>
  );
}

export default App;

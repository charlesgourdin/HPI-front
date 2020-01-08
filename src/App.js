import React from 'react';
import './App.css';
import ChatBox from './pages/ChatBox';
import Accueil from './pages/Accueil';
import FormEndCall from './pages/FormEndCall';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocketProvider from './providers/SocketContext';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  const url_test = () => {

    const params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    let token = params.get('token');

    // A désactiver après les tests :
    id = 'fake_ID';
    token = 'fake_token';

    // tests à personnaliser en fonction de l'url fournie :
    // faire une requete SQL pour vérifier le token
    if (token !== null && id !== null) {
      // const path = `'/chat?id=${id}&token=${token}'`;
      const path = "/chat";
      return (
        <>
          <Route exact path='/' component={Accueil}/>
          <Route path={path} component={ChatBox}/>
          <Route path='/form' component={FormEndCall}/>
        </>
      )
    } else {
      return ( 
        <div className="accueilContainer">
          <div className="accueilForm">
            <p>Vous n'êtes pas autorisé à accèder à ce lien</p>
            <p>Retour à l'accueil</p>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <SocketProvider>
        <BrowserRouter>
          {url_test()}
        </BrowserRouter>
      </SocketProvider>
    </div>
  );
}

export default App;

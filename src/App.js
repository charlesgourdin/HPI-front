import React, { Component } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const test_url = () => {

    let params = (new URL(document.location)).searchParams;
    let id = params.get('id');
    let token = params.get('token');

    // tests à personnaliser en fonction de l'url fournie :
    // faire une requete SQL pour vérifier le token
    if (token !== null && id !== null) {
      return <ChatBox />
    } else {
      return (
        <div id="access_denied">
          <p>Vous n'êtes pas autorisé à accèder à ce lien</p>
          <p>Retour à l'accueil</p>
        </div>
      );
    }
  }

  return (
    <div>
      {test_url()}
    </div>
  );
}

export default App;

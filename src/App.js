import React from 'react';
import './App.css';
import AccueilPsy from './pages/AccueilPsy';
import AccueilCollab from './pages/AccueilCollab';
import FormEndCall from './pages/FormEndCall';
import Psychologue from './pages/Psychologue';
import Collaborateur from './pages/Collaborateur';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocketProvider from './providers/SocketContext';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute';

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
      const path = "/collab";
      return (
        <>
          <Route exact path='/id' component={AccueilCollab} />
          <Route path='/form' component={FormEndCall} />
          <Route path={path} component={Collaborateur} />
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
    <div style={{
      height: '100vh',
      minHeight: '500px',
      minWidth: '600px'
    }}>
      <SocketProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={AccueilPsy} />
            <PrivateRoute path='/psy' component={Psychologue} />
            <Route path='/collab' component={Collaborateur} />
          </Switch>
          {url_test()}
        </BrowserRouter>
      </SocketProvider>
    </div>
  );
}

export default App;
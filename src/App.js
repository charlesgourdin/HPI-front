import React, { useContext } from 'react';
import axios from 'axios'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './pages/collaborateur/Accueil';
import Collaborateur from './pages/collaborateur/Collaborateur';
import AccueilPsy from './pages/AccueilPsy';
import Psychologue from './pages/Psychologue';
import { SocketContext } from './providers/SocketContext'


const params = (new URL(document.location)).searchParams;
const token = params.get('token');
const id = params.get('id');
let checkTokenValue = null;

const Authorized = () => {
  return (
    <>
      <Route exact path='/' component={Accueil} />
      <Route exact path='/collab' component={Collaborateur} />
      <Route exact path='/' component={Accueil} />
      
    </>
  );
}

const Unauthorized = () => {
  if ((!id || !token) || (id && token)) 
    return (
      <div className="d-flex h-100 w-100 align-items-center justify-content-center">
        <Link to={'/admin'}>
          <MDBBtn 
            type="button"
            outline 
            color="primary"
            className='position-absolute fixed-top secondary_button '
            style={{borderRadius: '10em'}}
          >
            Admin
          </MDBBtn>
        </Link>
        <h3>La page que vous cherchez n'existe pas.</h3>
      </div>
    )
}

async function CheckToken() {
  const { endpoint } = useContext(SocketContext)
  await axios.get(`${endpoint}/tickets?token=${token}`)
    .then(response => response.data)
    .then(data => {
      if (data.id.toString() === id.toString()) {
        checkTokenValue = true; 
      }
    })
    .catch((error) => {
      // console.log("Erreur:", error)
    });
  return checkTokenValue;
}

function App() {
  CheckToken()
  return (
    <div 
      style={{
        height: '100vh',
        width: '100vw',
        minHeight: '500px',
        minWidth: '600px'
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path='/admin' component={AccueilPsy} />
          <Route path='/admin/tickets' component={Psychologue} />
          {(checkTokenValue === true) ? <Authorized /> : <Unauthorized />}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

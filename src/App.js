import React, { useContext } from 'react';
import './App.css';
import axios from 'axios'
import AccueilPsy from './pages/AccueilPsy';
import AccueilCollab from './pages/AccueilCollab';
import Psychologue from './pages/Psychologue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocketContext } from './providers/SocketContext'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom'
import { MDBBtn } from 'mdbreact';


const params = (new URL(document.location)).searchParams;
const token = params.get('token');
const id = params.get('id');
let checkTokenValue = null;

const Authorized = () => {
  return <Route exact path='/' component={AccueilCollab} />;
}

const Unauthorized = () => {
  if ((!id || !token) || (id && token)) 
    return (
      <>
        <div 
          className="d-flex h-100 w-100 align-items-center justify-content-center"
          id='app-unauthorized' style={{ display: (checkTokenValue === 'admin') ? '' : 'none' }}
          >
          <Link to={'/admin'}>
            <MDBBtn 
              type="button"
              outline 
              color="primary"
              onClick={() => HideAdminButton()}
              className='position-absolute fixed-top secondary_button '
              style={{borderRadius: '10em'}}
            >
              Admin
            </MDBBtn>
          </Link>
          <h3>La page que vous cherchez n'existe pas.</h3>
        </div>
      </>
    )
}

const HideAdminButton = () => {
  const doc = document.getElementById('app-unauthorized')
  doc.style.visibility = 'hidden'
  doc.style.display = 'none'
  console.log(doc)
}

async function CheckToken() {
  const { endpoint } = useContext(SocketContext)
    await axios.get(`${endpoint}/tickets?token=${token}`)
      .then(response => response.data)
      .then(data => {
        if (data.id.toString() === id.toString()) {
          checkTokenValue = true; 
        } else {
          checkTokenValue = 'admin'
        }
      })
      .catch((error) => {
        checkTokenValue = 'admin'
        // console.log("Erreur:", error)
      });
  return checkTokenValue;
}

function App() {
  CheckToken()
  if (token && id) console.log("1")
  if (!token || !id) console.log("2")
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

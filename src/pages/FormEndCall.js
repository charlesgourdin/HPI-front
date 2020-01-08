import React from 'react';
import FormPsy from '../components/FormPsy';
import FormCollab from '../components/FormCollab';
import FormConversation from '../components/FormConversation';
import FormComment from '../components/FormComment';
import { MDBCol, MDBBtn } from 'mdbreact';


const FormEndCall = () => {
  return(
    <div className="d-md-flex">
      <MDBCol md='6' tag='section'>
        <FormPsy />
        <FormCollab />
        <FormConversation />
      </MDBCol>

      <MDBCol md='6' tag='section'>
        <FormComment />
        <div className="text-right">
          <MDBBtn color="red text-right">Annuler</MDBBtn>
          <MDBBtn color="dark-green text-right">Valider</MDBBtn>
        </div>
      </MDBCol>

    </div>
  )}

export default FormEndCall;

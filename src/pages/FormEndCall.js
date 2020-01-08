import React from 'react';
import FormPsy from '../components/FormPsy';
import FormCollab from '../components/FormCollab';
import { MDBCol } from 'mdbreact';


const FormEndCall = () => {
  return(
    <>
      <MDBCol md='6' tag='section'>
        <FormPsy />
        <FormCollab />
      </MDBCol>
    </>
  )}

export default FormEndCall;

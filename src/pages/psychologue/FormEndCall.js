import React, { useContext } from 'react';
import { PsychologueContext } from '../../providers/PsychologueContext'
import FormPsy from '../../components/Psychologue/FormPsy';
import FormCollab from '../../components/Psychologue/FormCollab';
import FormConversation from '../../components/Psychologue/FormConversation';
import FormComment from '../../components/Psychologue/FormComment';
import { MDBCol } from 'mdbreact';


const FormEndCall = () => {

  const { sendForm } = useContext(PsychologueContext)

  return (
    <div className="d-md-flex py-4 h-100 rounded z-depth-1" >
      <MDBCol md='6' tag='section'>
        <FormPsy />
        <FormCollab />
        <FormConversation />
      </MDBCol>

      <MDBCol md='6' tag='section' className='d-flex flex-column'>
        <FormComment />
        <div className="text-right mt-auto">
          {/* <button className='secondary_button z-depth-1' onClick={() => closeTicket()}>Annuler</button> */}
          <button className='primary_button z-depth-1' onClick={() => sendForm()}>Envoyer</button>
        </div>
      </MDBCol>

    </div>
  )
}

export default FormEndCall;

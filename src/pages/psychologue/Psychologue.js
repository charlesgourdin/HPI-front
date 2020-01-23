import React, { useContext, useEffect } from 'react';
import { PsychologueContext } from '../../providers/PsychologueContext'
import {
    MDBCol,
    MDBRow
} from 'mdbreact';
import ChatBoxPsy from '../../components/Psychologue/ChatBoxPsy';
import TicketMenu from '../../components/Psychologue/TicketMenu';
import MenuPsy from '../../components/Psychologue/MenuPsy';
import FormEndCall from './FormEndCall';
import PsychoMenu from '../../components/Psychologue/PsychoMenu';
import ProfilMenu from '../../components/Psychologue/ProfilMenu';

const Psychologue = () => {

    const { chatActiv, formActiv, getTicket, menuActiv } = useContext(PsychologueContext)

    useEffect(() => {
        getTicket()
    }, [getTicket])

    return (
        <div className='d-flex h-100 justify-content-center' style={{}}>
            <MDBRow className='w-100 h-100'>
                <MDBCol className='h-100' size='6' md='5' xl='4'>
                    <MDBRow className='w-100 h-100'>
                        <MDBCol className='m-0 p-0 h-100' size='4' md='4' lg='3' xl='2'>
                            <MenuPsy />
                        </MDBCol>
                        <MDBCol className='m-0 p-0 h-100' size='8' md='8' lg='9' xl='10'>
                            {menuActiv==='profil' && <ProfilMenu />}
                            {menuActiv==='psychologues' && <PsychoMenu />}
                            {menuActiv==='tickets' && <TicketMenu />}
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol className='h-100 p-3' size='6' md='7' xl='8'>
                    {chatActiv && <ChatBoxPsy />}
                    {formActiv && <FormEndCall />}
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Psychologue

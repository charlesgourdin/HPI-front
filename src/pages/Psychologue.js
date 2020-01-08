import React, { useContext } from 'react';
import {
    MDBCol,
    MDBRow
} from 'mdbreact';
import ChatBox from '../components/ChatBox';
import TicketFill from '../components/TicketFill';
import StatusBloc from '../components/StatusBloc';

const Psychologue = () => {


    return (
        <div className='d-flex h-100 p-2' style={{
        }}>
            <MDBRow className='w-100'>
                <MDBCol className='h-100 d-flex flex-column justify-content-between' size='6' md='5' xl='4'>
                    <StatusBloc />
                    <TicketFill />
                </MDBCol>
                <MDBCol size='6' md='7' xl='8'>
                    <ChatBox />
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Psychologue

import React, { useContext } from 'react';
import {
    MDBCol,
    MDBRow
} from 'mdbreact';
import ChatBox from '../components/ChatBox';
import TicketFill from '../components/TicketFill';

const Psychologue = () => {


    return (
        <div className='d-flex h-100 p-2' style={{
        }}>
            <MDBRow className='w-100'>
                <MDBCol size='4'>
                    <TicketFill/>
                </MDBCol>
                <MDBCol size='8'>
                    <ChatBox />
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Psychologue

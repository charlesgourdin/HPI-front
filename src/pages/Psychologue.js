import React from 'react';
import {
    MDBCol,
    MDBRow
} from 'mdbreact';
import ChatBox from '../components/ChatBox';
import TicketFill from '../components/TicketFill';
import MenuPsy from '../components/MenuPsy';

const Psychologue = () => {


    return (
        <div className='d-flex h-100' style={{
        }}>
            <MDBRow className='w-100 h-100'>
                <MDBCol className='h-100' size='6' md='5' xl='4'>
                    <MDBRow className='w-100 h-100'>
                        <MDBCol className='m-0 p-0 h-100' size='4' md='4' lg='3' xl='2'>
                            <MenuPsy />
                        </MDBCol>
                        <MDBCol className='m-0 p-0 h-100' size='8' md='8' lg='9' xl='10'>
                            <TicketFill />
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol className='h-100 p-3' size='6' md='7' xl='8'>
                    <ChatBox />
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Psychologue

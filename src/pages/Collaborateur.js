import React from 'react';
import {
    MDBCol,
    MDBRow
} from 'mdbreact';
import ChatBox from '../components/ChatBox';

const Collaborateur = () => {


    return (
        <div className='d-flex h-100 p-2' style={{
        }}>
            <MDBRow center className='w-100'>
                <MDBCol className='h-100' size='10'>
                    <ChatBox />
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Collaborateur

import React from 'react';
import {
    MDBCol,
    MDBRow
} from 'mdbreact';
import ChatBoxCollab from '../../components/collaborateur/ChatBoxCollab';

const Collaborateur = () => {


    return (
        <div className='d-flex h-100 p-2' style={{
        }}>
            <MDBRow center className='w-100'>
                <MDBCol className='h-100' size='10'>
                    <ChatBoxCollab />
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Collaborateur

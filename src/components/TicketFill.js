import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdbreact';
import StatusResum from './StatusResum';

const ticketModel = [
    {
        id: 1,
        username: 'Eric',
        attente: 'date'
    },
    {
        id: 2,
        username: 'Tom',
        attente: 'date'
    },
    {
        id: 3,
        username: 'Max',
        attente: 'date'
    },
    {
        id: 4,
        username: 'Jules',
        attente: 'date'
    },
    {
        id: 5,
        username: 'Anne',
        attente: 'date'
    },
]

const TicketFill = () => {


    return (
        <div className='z-depth-2 d-flex flex-column justify-content-between p-0' style={{
            borderRadius: '20px',
            backgroundColor: '#236FFF',
            padding: '10px',
            height: '86%'
        }}>
            <h2 style={{
                textAlign: 'center',
                color: 'white',
                marginTop: '10px',
                fontWeight: 'bold'
            }}>
                Tickets
                </h2>
            <div className='d-flex flex-column justify-content-start align-items-center mx-2 mb-2'
                style={{
                    height: 'auto',
                    overflowY: 'scroll'

                }}>
                {
                    ticketModel.map((ticket, i) => {
                        return (
                            <MDBCard className='m-3' style={{
                                width: '90%',
                                backgroundColor: '#082B2B',
                                borderRadius: '12px'
                            }}>
                                <MDBCardBody style={{ color: 'white' }}>
                                    <MDBCardTitle>Ticket {ticket.id}</MDBCardTitle>
                                    <MDBCardText>
                                        {ticket.username}
                                    </MDBCardText>
                                    <MDBBtn href="#" color='green'>Prendre le ticket</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        )
                    })
                }
            </div>
            <StatusResum />
        </div>
    )
}

export default TicketFill
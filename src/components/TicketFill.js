import React, { useContext } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

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
        <div className='z-depth-2' style={{
            borderRadius: '20px',
            backgroundColor: '#236FFF',
            padding: '10px',
            height: '83%'
        }}>
            <h2 style={{
                textAlign: 'center',
                color: 'white'
            }}>
                Tickets
                </h2>
            <div className='d-flex flex-column justify-content-start align-items-center'
                style={{
                    height: '90%',
                    overflowY: 'scroll'
                }}>
                {
                    ticketModel.map((ticket, i) => {
                        return (
                            <MDBCard className='m-3' style={{
                                width: '90%',
                                backgroundColor: '#082B2B'
                            }}>
                                <MDBCardBody style={{color: 'white'}}>
                                    <MDBCardTitle>Ticket {ticket.id}</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn href="#" color='green'>Prendre le ticket</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TicketFill
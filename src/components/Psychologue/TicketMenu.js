import React, { useContext } from 'react';
import { PsychologueContext } from '../../providers/PsychologueContext'
import Moment from 'react-moment'

const TicketMenu = () => {

    const { openChat, ticketActiv, tickets } = useContext(PsychologueContext)

    const displayTcketStyle = (i, ticketActiv) => {
        if (ticketActiv === i) {
            return 'ticketActiv'
        } else if ((ticketActiv !== -1) && (i !== ticketActiv)) {
            return 'ticketInactiv'
        } else {
            return 'ticket'
        }
    }

    const countOldTickets = (i) => {
        return tickets
            .filter(item => item.collab_id === i)
            .filter(item => item.state === 'closed')
            .length
    }


    return (
        <div className='h-100 z-depth-2 d-flex flex-column justify-content-between p-0' style={{
            backgroundColor: 'white',
            padding: '10px'
        }}>
            <h2 style={{
                textAlign: 'center',
                color: 'black',
                marginTop: '10px',
            }}>
                Tickets
                <hr />
            </h2>
            <div className='d-flex flex-column justify-content-start align-items-center mx-2 mb-2'
                style={{
                    height: 'auto',
                    overflowY: 'scroll'

                }}>
                {
                    tickets
                        .filter((ticket) => ticket.state === 'open')
                        .map((ticket, i) => {
                            return (
                                <div
                                    className={displayTcketStyle(i, ticketActiv)}
                                    onClick={(displayTcketStyle(i, ticketActiv) === 'ticket') ? () => openChat(i, ticket.channel, ticket.id) : null}
                                    key={'ticket' + i}
                                >
                                    <p style={{
                                        fontWeight: 'bold'
                                    }}
                                    >
                                        {ticket.pseudo}
                                    </p>
                                    <p style={{
                                        fontStyle: 'italic',
                                        color: ((ticketActiv !== -1) && (i !== ticketActiv)) ? 'lightgrey' : 'grey'
                                    }}
                                    >
                                        Connexion le <Moment format="DD/MM/YYYY">{ticket.updated_on}</Moment> à <Moment format="HH:mm">{ticket.updated_on}</Moment>
                                    </p>
                                    <div><hr /></div>
                                    <p style={{
                                        fontSize: '12px'
                                    }}
                                    >
                                        Historique:
                                         </p>
                                    <p style={{
                                        fontStyle: 'italic',
                                        color: ((ticketActiv !== -1) && (i !== ticketActiv)) ? 'lightgrey' : 'grey'
                                    }}
                                    >
                                        {countOldTickets(ticket.collab_id)} ticket(s) clôturé(s)
                                        </p>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default TicketMenu

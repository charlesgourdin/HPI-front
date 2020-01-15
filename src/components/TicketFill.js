import React, { useContext } from 'react';
import { SocketContext } from '../providers/SocketContext'

const ticketModel = [
    {
        id: 1,
        username: 'Eric',
        connexion: '2019-01-01 08:00:00'
    },
    {
        id: 2,
        username: 'Tom',
        connexion: '2019-01-01 08:00:00'
    },
    {
        id: 3,
        username: 'Max',
        connexion: '2019-01-01 08:00:00'
    },
    {
        id: 4,
        username: 'Jules',
        connexion: '2019-01-01 08:00:00'
    },
    {
        id: 5,
        username: 'Anne',
        connexion: '2019-01-01 08:00:00'
    },
]

const TicketFill = () => {

    const { openChat, ticketActiv } = useContext(SocketContext)

    const displayTcketStyle = (i, ticketActiv) => {
        if (ticketActiv === i) {
            return 'ticketActiv'
        } else if ((ticketActiv !== -1) && (i !== ticketActiv)) {
            return 'ticketInactiv'
        } else {
            return 'ticket'
        }
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
                </h2>
            <div><hr /></div>
            <div className='d-flex flex-column justify-content-start align-items-center mx-2 mb-2'
                style={{
                    height: 'auto',
                    overflowY: 'scroll'

                }}>
                {
                    ticketModel.map((ticket, i) => {
                        return (
                            <div
                                className={displayTcketStyle(i, ticketActiv)}
                                onClick={(displayTcketStyle(i, ticketActiv) === 'ticket') ? () => openChat(i) : null}
                            >
                                <p style={{
                                    fontWeight: 'bold'
                                }}
                                >
                                    {ticket.username}
                                </p>
                                <p style={{
                                    fontStyle: 'italic',
                                    color: ((ticketActiv !== -1) && (i !== ticketActiv)) ? 'lightgrey' : 'grey'
                                }}
                                >
                                    Connexion à {ticket.connexion}
                                </p>
                                <div><hr /></div>
                                <p style={{
                                    fontSize: '12px'
                                }}
                                >
                                    Message:
                                         </p>
                                <p style={{
                                    fontStyle: 'italic',
                                    color: ((ticketActiv !== -1) && (i !== ticketActiv)) ? 'lightgrey' : 'grey'
                                }}
                                >
                                    Pas de message dans le fil
                                        </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TicketFill
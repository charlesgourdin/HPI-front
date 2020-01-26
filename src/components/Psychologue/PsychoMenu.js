import React, { useContext } from 'react';
import { PsychologueContext } from '../../providers/PsychologueContext'

const PsychoMenu = () => {

    const { psychologues } = useContext(PsychologueContext)

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
                Psychologues
                <hr />
            </h2>
            <div className='d-flex flex-column justify-content-start align-items-center mx-2 mb-2'
                style={{
                    height: 'auto',
                    overflowY: 'scroll'
                }}>
                {
                    psychologues.map((item, i) => {
                        return (
                            <div key={'psy' + i}>
                                <p>{item.firstname} {item.lastname}</p>
                                <p>{item.role}</p>
                                <hr />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default PsychoMenu
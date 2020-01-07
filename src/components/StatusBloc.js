import React, { useState } from 'react'
import user from '../assets/user.png'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn, MDBIcon } from "mdbreact";

const StatusBloc = () => {

    const [status, setStatus] = useState({ status: 'Online', color: 'lightGreen' })

    return (
        <div className='z-depth-2 d-flex align-items-center pl-3' style={{
            borderRadius: '20px',
            backgroundColor: '#236FFF',
            padding: '10px',
            height: '15%'
        }}>
            <img src={user} alt='user' style={{
                filter: 'invert(100%)',
                height: '60%'
            }} />
            <div className='ml-2'>
                <p className='m-1' style={{
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    Psychologue name
                </p>
                <div className='d-flex align-items-center m-1'>
                    <div style={{
                        height: '15px',
                        width: '15px',
                        backgroundColor: `${status.color}`,
                        borderRadius: '50%'
                    }} />
                    <p className='m-0 ml-1' style={{ color: 'white' }}>{status.status}</p>
                    <div className='ml-2'>
                        <MDBDropdown>
                            <MDBDropdownToggle tag="a" size="sm" floating gradient="blue">
                                <MDBIcon icon="angle-down" className=' white-text' />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic>
                                <MDBDropdownItem onClick={() => setStatus({ status: 'Online', color: 'lightGreen' })}>Online</MDBDropdownItem>
                                <MDBDropdownItem onClick={() => setStatus({ status: 'Occupé', color: 'Orange' })}>Occupé</MDBDropdownItem>
                                <MDBDropdownItem onClick={() => setStatus({ status: 'Offline', color: 'red' })}>Offline</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusBloc
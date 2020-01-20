import React, { useContext, useState } from 'react';
import { SocketContext } from '../providers/SocketContext';
import axios from 'axios';
import { MDBCol } from 'mdbreact';

const AccueilPsy = () => {

    const { endpoint } = useContext(SocketContext)
    const [data, updateData] = useState({ email: '', password: '' })

    const updateField = (event) => {
        updateData(Object.assign(data, { [event.target.name]: event.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${endpoint}/users/auth/admin`, { data })
            .then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    
                }
            })
    }

    return (
        <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
            <h2 style={{
                marginBottom: '64px',
                fontWeight: 'bold',
                fontSize: '64px'
            }}>
                Bienvenue sur SpeakUp
            </h2>
            <MDBCol md='6' className='d-flex align-items-center'>
                <form className='w-100 px-5 py-3 z-depth-4' style={{
                    backgroundColor: '#034ACF',
                    borderRadius: '20px'
                }}>
                    <p className='h5 text-center mb-4 white-text'>Sign in</p>
                    <label htmlFor='email' className='white-text'>
                        Your email
                  </label>
                    <input type='email' id='email' name='email' className='form-control' onChange={updateField} />
                    <br />
                    <label htmlFor='password' className='white-text'>
                        Your password
                  </label>
                    <input type='password' id='password' name='password' className='form-control' onChange={updateField} />
                    <div className='text-center mt-4'>
                        <button className='secondary_button' style={{ width: '200px' }} type='submit' onClick={handleSubmit} >
                            Login
                        </button>
                    </div>
                </form>
            </MDBCol>
        </div>
    )

}

export default AccueilPsy;

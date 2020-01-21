import React, { useContext, useState } from 'react';
import { SocketContext } from '../providers/SocketContext';
import axios from 'axios';
import { MDBCol, MDBIcon } from 'mdbreact';
import { useHistory } from 'react-router-dom';

const AccueilPsy = () => {

    const { endpoint, logUser } = useContext(SocketContext);
    const [data, updateData] = useState({ email: '', password: '' });
    const [error, setError] = useState([false, ''])
    let history = useHistory();

    const updateField = (event) => {
        updateData(Object.assign(data, { [event.target.name]: event.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${endpoint}/users/auth/admin`, { data })
            .then(res => {
                if (res.status === 200) {
                    logUser(res.data[0])
                }
            })
            .then(() => {
                history.replace('/psy')
            })
            .catch(err => {
                setError([true, err.response.data.message])
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
            {error[0]
                ?
                <div className='z-depth-2 d-flex justify-content-center align-items-center'
                    style={{
                        width: '400px',
                        height: '40px',
                        borderRadius: '8px',
                        opacity: '0.8'
                    }}>
                    <p className='m-0' style={{ fontWeight: 'bold' }}>
                        <MDBIcon icon="times-circle" size="1x" className="red-text mr-3" />
                          {error[1]}
                    </p>
                </div>
                : null
            }
        </div>
    )

}

export default AccueilPsy;

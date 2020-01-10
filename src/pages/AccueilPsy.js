import React, { Component, useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { SocketContext } from '../providers/SocketContext'
import { MDBCol } from 'mdbreact'

class AccueilPsy extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    updateField = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch("/",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(this.state),
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                else {
                    throw new Error(res.statusText);
                }
            })
            .catch(err => this.setState({ "flash": err.message }))
    }

    render() {
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
                        <label htmlFor='username' className='white-text'>
                            Your name
                  </label>
                        <input type='text' id='username' name='username' className='form-control' onChange={this.updateField} />
                        <br />
                        <label htmlFor='password' className='white-text'>
                            Your password
                  </label>
                        <input type='password' id='password' name='password' className='form-control' onChange={this.updateField} />
                        <div className='text-center mt-4'>
                            <Link to='/psy'><button className='secondary_button' style={{ width: '200px' }} type='submit'  >
                                Login
                    </button></Link>
                        </div>
                    </form>
                </MDBCol>
            </div>
        )
    }
}

export default AccueilPsy;

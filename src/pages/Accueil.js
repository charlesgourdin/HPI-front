import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import './Accueil.css';
import { SocketContext } from '../providers/SocketContext'

const Accueil = () => {

    const { changeUsername } = useContext(SocketContext)
    const [name, changeName] = useState('anonyme')

    // const handleKeyPress = (event) => {

    //     event.preventDefault();
    //     if (event.keyCode === 13) {
    //         this.handleEnter();
    //     }
    // }

    return (
        <div className='accueilContainer'>
            <h2>Bienvenue sur SpeakUp</h2>
            <div className='accueilForm'>
                <p>Entrez un pseudo ou lancer la conversatione en anonyme</p>
                <input
                    type='text'
                    id='user'
                    name='user'
                    onChange={e => {
                        changeName(e.target.value)
                    }}
                    value={name}
                />
                <Link to={'/collab'}><button onClick={() => changeUsername(name)}>Lancer la conversation</button></Link>
            </div>
        </div>
    )
}

export default Accueil;

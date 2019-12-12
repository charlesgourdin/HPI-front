import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import './Accueil.css';
import { SocketContext } from '../providers/SocketContext'

const Accueil = () => {

    const { changeUsername } = useContext(SocketContext)

    const [name, changeName] = useState('anonyme')

    return (
        <div className='accueilContainer'>
            <h2>Bienvenue sur SpeakUp</h2>
            <div className='accueilForm'>
                <h4>Entrez un pseudo ou lancer la conversatione en anonyme</h4>
                <input
                    type='text'
                    id='user'
                    name='user'
                    onChange={e => changeName(e.target.value)}
                    value={name}
                />
                <Link to={'/chat'}><button onClick={() => changeUsername(name)}>Lancer la conversation</button></Link>
            </div>
        </div>
    )
}

export default Accueil;
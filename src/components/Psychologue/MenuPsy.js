import React, { useContext } from 'react';
import { PsychologueContext } from '../../providers/PsychologueContext';
import hpiLogo from '../../assets/hpiLogo.png';

const MenuPsy = () => {

    const { changeMenu } = useContext(PsychologueContext)

    return (
        <div
            className='h-100 w-100 d-flex flex-column align-items-center '
            style={{
                backgroundColor: '#236fff'
            }}>
            <img src={hpiLogo} alt='logo_hpi' style={{ width: '50%', margin: '8px' }} />
            <div>
                <button onClick={() => changeMenu('profil')}>Profil</button>
                <button onClick={() => changeMenu('psychologues')}>Psychologues</button>
                <button onClick={() => changeMenu('tickets')}>Tickets</button>
            </div>

        </div>
    )
}

export default MenuPsy
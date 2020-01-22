import React from 'react'
import hpiLogo from '../../assets/hpiLogo.png'

const MenuPsy = () => {

    return (
        <div
            className='h-100 w-100 d-flex flex-column align-items-center '
            style={{
                backgroundColor: '#236fff'
            }}>
            <img src={hpiLogo} alt='logo_hpi' style={{ width: '50%', margin:'8px'}} />

        </div>
    )
}

export default MenuPsy
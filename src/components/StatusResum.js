import React from 'react';

const StatusResum = () => {


    return (
        <div className='d-flex justify-content-around' style={{
            backgroundColor: '#082B2B',
            height: '65px',
            borderRadius: '0px 0px 20px 20px'
        }}>
            <div className='d-flex align-items-center m-1'>
                <div className='d-flex justify-content-center align-items-center' style={{
                    height: '24px',
                    width: '24px',
                    backgroundColor: `LimeGreen `,
                    borderRadius: '50%'
                }}><p className='m-0' style={{ fontWeight: 'bold', color: 'white' }}>1</p></div>
                <p className='m-0 ml-2' style={{ color: 'white' }}>Online</p>
            </div>
            <div className='d-flex align-items-center m-1'>
                <div className='d-flex justify-content-center align-items-center' style={{
                    height: '24px',
                    width: '24px',
                    backgroundColor: `orange`,
                    borderRadius: '50%'
                }}><p className='m-0' style={{ fontWeight: 'bold', color: 'white' }}>3</p></div>
                <p className='m-0 ml-2' style={{ color: 'white' }}>Occupé</p>
            </div>
            <div className='d-flex align-items-center m-1'>
                <div className='d-flex justify-content-center align-items-center' style={{
                    height: '24px',
                    width: '24px',
                    backgroundColor: `red`,
                    borderRadius: '50%'
                }}><p className='m-0' style={{ fontWeight: 'bold', color: 'white' }}>2</p></div>
                <p className='m-0 ml-2' style={{ color: 'white' }}>Offline</p>
            </div>
        </div>
    )
}

export default StatusResum;
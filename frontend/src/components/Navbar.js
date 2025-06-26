import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='row' style={{backgroundColor:'#B9D4AA'}}>
                <div className='d-flex justify-content-between align-items-center px-5 py-2'>
                    <div>
                        <h3>Lia <i>blog</i></h3>
                    </div>
                    <div className=''>
                        <button className='btn btn-primary'>Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
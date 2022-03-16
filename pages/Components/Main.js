import React from 'react'
import Cart from './Main/Cart'
import Details from './Main/Details'

function Main() {
    return (
        <div className='main flex flex-row justify-between '>
            <Details />
            <Cart/>
        </div>
    )
}

export default Main
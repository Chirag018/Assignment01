import React from 'react'
import card from '../../assets/card.png'

function Details() {
    return (
        <div className='mt-4 px-10 flex flex-col space-y-5'>
            <div className='flex justify-between'>
                <span>Personal Details</span>
                <span className='text-pink-600 cursor-pointer'>Payment Section</span>
            </div>
            <hr className='' />
            <span className='font-bold'>PAYMENT SECTION</span>
            <div className='flex '>
                <span className='text-gray-400'>SAVED CARDS</span>
                <h6 className='text-xs text-blue-400 mt-2 px-1'>Edit</h6>
            </div>
            <div className='flex relative'>
                <img src={card} />
                <span className='absolute top-14 left-14 text-justify'>xxxx 4023 <span className='text-white'>VISA</span></span>
                <img src={card} />
                <span className='absolute top-14 left-80 text-justify'>xxxx 4023</span>
            </div>
            <span className='text-gray-400 top-10'>Other Payent Methods</span>
            <div className='flex mt-6 mb-10 justify-between'>
                <button className='border-2 p-2 px-6 rounded-md'>Credit/Debit Card</button>
                <button className='border-2 p-2 px-6 rounded-md'>Net Banking</button>
                <button className='border-2 p-2 px-6 rounded-md'>UPI</button>
            </div>

            <div className='flex justify-between mb-6'>
                <input type='number' placeholder='0000 0000 0000 0000' />
                <input type='text' placeholder='ENTER YOUR NAME' />
            </div>
            <div className='flex justify-around mb-24'>
                <input type='date' placeholder='MM/YY' />
                <input type='password' placeholder='---' />
            </div>
            <hr />
            <div className='flex justify-between mt-10 mb-10'>
                <button className='text-blue-600'>back To Personal Details</button>
                <button className='border-2 rounded-full p-2 bg-orange-500'>Make payment</button>
            </div>
        </div>
    )
}

export default Details
import React from 'react'
import imgs from '../../assets/imgs.png'

function Cart() {

    const data = [
        { service: ' 1 hour lesson', price: '3000.80' },
        { service: '  Transaction fee', price: '22.51' },
        { service: '  lesson cancellation', price: 'free' },
    ];

    return (
        <div className='cart flex flex-col justify-between bg-gray-100 px-10 space-y-4'>
            <div className='flex mt-4'>
                <span className='uppercase text-lg mr-2'>order summary</span>
                <span className='capitalize text-blue-500 text-xs mt-2'>edit</span>
            </div>
            <hr />
            <div className='flex'>
                <img src={imgs} />
                <div className='flex flex-col ml-4 my-2'>
                    <span className='uppercase font-bold'>ella .h</span>
                    <span className='capitalize font-sans'>english</span>
                </div>
            </div>
            <hr />
            <div className='flex flex-col capitalize'>
                <span className='text-gray-400'>date and time</span>
                <span className='text-lg'>friday, february 4,18:30</span>
                <span className='uppercase text-gray-400'>gmt +5:30</span>
            </div>
            <hr />
            <div className='flex flex-row justify-between capitalize'>
                <span>apply coupon</span>
                <span className='text-white bg-slate-100'>coupon code you get is </span>
            </div>
            <hr />
            <table className='flex flex-col justify-between items-stretch '>
                <tr className='flex justify-between text-gray-500 text-sm'>
                    <th className='capitalize'>service details</th>
                    <th>price per hour</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key} className='flex flex-row justify-between'>
                            <td className='text-gray-500'>{val.service}</td>
                            <td>{val.price}</td>
                        </tr>
                    )
                })}
            </table>
            <hr />
            <div className='flex justify-between font-bold text-gray-400 mb-4'>
                <span>Total</span>
                <span className='text-gray-700'>Rs:3496.00</span>
            </div>
            <div className='flex text-center justify-between items-center '>
                <input type='checkbox' className='mr-3 border-green-400' />
                <span className='w-80 text-left'>I want a <a className='cursor-pointer text-green-500'>free lesson</a> or a refund if the tutor
                    doesnt meet my needs</span>
            </div>
            <div className='mb-10'></div>
        </div>
    )
}

export default Cart
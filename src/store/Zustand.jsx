import React from 'react'
import useStore from './useStore'
function Zustand() {
    const { count, inc, dec } = useStore()
    return (
        <div className='w-[200px] border-2 rounded-md p-2 border rounded-xl ml-5'>
            <h1>4. Oddiy Counter ilovasi
                </h1>
            <h1 className='text-center border rounded-md mb-2'>{count}</h1>
            <button onClick={inc} className='bg-green-500 p-2 rounded-md text-white hover:bg-green-600 cursor-pointer'>Inc</button>
            <button onClick={dec} className='bg-red-500 p-2 rounded-md text-white hover:bg-red-600 cursor-pointer'>Dec</button>
        </div>
    )
}

export default Zustand

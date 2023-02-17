import React from 'react'

const InputLabel = ({ text, info }) => {
    return (
        <>
            <h2 className='text-2xl mt-4'>{text}</h2>
            <p className='text-gray-500 text-sm'>{info}</p>
        </>
    )
}

export default InputLabel;
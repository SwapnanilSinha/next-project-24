import React from 'react'

function Title({ text }: { text: String }) {
    return (
        <h3 className='text-lg font-bold mb-2'>{text}</h3>
    )
}

export default Title
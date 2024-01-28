import React from 'react'

export default function Heading({short_description , title}) {
    return (
        <div className='text-center mb-7 mt-10 dark:text-white'>
            <h2 class="text-2xl font-semibold mb-4 leading-8 relative before:content-[' '] before:-bottom-1 before:h-[0.10rem] before:w-20 before:bg-[#1b5df3] before:absolute undefined">
                {title}
            </h2>
            <p>{short_description}</p>
        </div>
    )
}

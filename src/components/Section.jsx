import React from 'react'

function Section(props) {
    return (
        <div className='section'>
            {props.children}
        </div>
    )
}
export function SectionTitle(props) {
    return (
        <div className='section__Title'>
            {props.children}
        </div>
    )
}
export function SectionBody(props) {
    return (
        <div className='section__Body'>
            {props.children}
        </div>
    )
}

export default Section
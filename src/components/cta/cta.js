import React from 'react'
import * as classes from './cta.module.scss'

export default function Cta({desc, handleClick}) {
    return (
        <div>
            <button onClick={handleClick} className={classes.cta}>{desc}</button>
        </div>
    )
}

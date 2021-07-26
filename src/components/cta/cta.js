import React from 'react'
import * as classes from './cta.module.scss'

export default function Cta({desc}) {
    return (
        <div>
            <button className={classes.cta}>{desc}</button>
        </div>
    )
}

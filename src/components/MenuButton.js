import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    button: {
        height: ({ small }) => small ? '2rem' : '3rem',
        '&:hover': {
            opacity: 0.5
        }
    }
})

function MenuButton({ small, source, onClick }) {
    const classes = useStyles({
        small
    })

    return (
        <input className={classes.button} type="image" src={source} alt={source} onClick={onClick} />
    )
}

export default MenuButton
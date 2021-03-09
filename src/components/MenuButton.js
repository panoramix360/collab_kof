import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    button: {
        height: '3rem',
        '&:hover': {
            opacity: 0.5
        }
    }
})

function MenuButton({ source, onClick }) {
    const classes = useStyles()

    return (
        <input className={classes.button} type="image" src={source} alt={source} onClick={onClick} />
    )
}

export default MenuButton
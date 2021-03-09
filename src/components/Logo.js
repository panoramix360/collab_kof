import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import logo from '../assets/logo.png'

const useStyles = makeStyles({
    logo: {
        width: '50%',
    }
})

function Logo() {
    const classes = useStyles()

    return (
        <img className={classes.logo} src={logo} alt="logo" />
    )
}

export default Logo
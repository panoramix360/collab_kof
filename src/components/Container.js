import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

import fundoMenu from '../assets/fundoMenu.png'

const useStyles = makeStyles({
    background: {
        height: '100vh',
        backgroundImage: `url(${fundoMenu})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'auto'
    },
    container: {
        marginTop: '10rem'
    }
})

function Background({ children }) {
    const classes = useStyles()

    return (
        <div className={classes.background}>
            <Container fluid className={classes.container}>
                {children}
            </Container>
        </div>
    )
}

export default Background
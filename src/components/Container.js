import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

import fundoMenu from '../assets/fundoMenu.png'

const useStyles = makeStyles({
    container: {
        height: '100vh',
        margin: '0 auto',
        backgroundImage: `url(${fundoMenu})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'auto'
    }
})

function Background({ children }) {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Container>
                {children}
            </Container>
        </div>
    )
}

export default Background
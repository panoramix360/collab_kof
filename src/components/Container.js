import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles({
    background: {
        height: '100vh',
        backgroundImage: ({ backgroundImage }) => `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'auto'
    },
    container: {
        marginTop: '10rem'
    }
})

function Background({ children, backgroundImage }) {
    const classes = useStyles({
        backgroundImage
    })

    return (
        <div className={classes.background}>
            <Container fluid className={classes.container}>
                {children}
            </Container>
        </div>
    )
}

export default Background
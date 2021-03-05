import React from 'react'

import { Grid } from '@material-ui/core'

import { Container, Logo } from '../components'

function Menu() {
    return (
        <Container>
            <Grid container justify="center">
                <Grid item xs={6}>
                    <Logo />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Menu
import React from 'react'

import { Grid } from '@material-ui/core'

import { Container, Logo, MenuButton } from '../components'

import start from '../assets/Start.png'
import credits from '../assets/creditos.png'
import twitterTag from '../assets/Twittertag.png'

function Menu() {
    return (
        <Container>
            <Grid container spacing={6}>
                <Grid item xs={12} container justify="center">
                    <Logo />
                </Grid>

                <Grid item xs={12} container justify="center">
                    <MenuButton source={start} />
                </Grid>

                <Grid item xs={12} container justify="center">
                    <MenuButton source={credits} />
                </Grid>

                <Grid item xs={12} container justify="center">
                    <MenuButton source={twitterTag} onClick={() => window.open("https://twitter.com/search?q=%23kofbr&src=typed_query")} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Menu
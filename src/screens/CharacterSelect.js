import React from 'react'

import { Grid } from '@material-ui/core'

import { Container, Logo, MenuButton } from '../components'

import fundo from '../assets/fundo.png'
import back from '../assets/back.png'
import mute from '../assets/mute.png'

import { useHistory } from 'react-router-dom'

function CharacterSelect() {
    const history = useHistory()

    return (
        <Container backgroundImage={fundo}>
            <Grid container direction="column">
                <Grid item xs={12}>
                    
                </Grid>
                <Grid container xs={12} justify="space-between">
                    <Grid item xs={11}>
                        <MenuButton small source={back} onClick={() => history.goBack()} />
                    </Grid>

                    <Grid item xs={1}>
                        <MenuButton small source={mute} />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CharacterSelect
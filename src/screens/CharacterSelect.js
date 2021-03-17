import React from "react";

import { Grid } from "@material-ui/core";

import { CharacterViewer, Container, MenuButton, CharacterGrid } from "../components";

import fundo from "../assets/fundo.png";
import back from "../assets/back.png";
import mute from "../assets/mute.png";
import characterTest from "../assets/arts/ALQUIMISTA_DO_ACRE_@thedanvelez.png";

import json from '../assets/arts/arts.json'

import { useHistory } from "react-router-dom";

function CharacterSelect() {
    const history = useHistory();

    const arts = buildCharacterObjects()

    function buildCharacterObjects() {
        let arts = []

        json.arts.forEach((art) => {
            const name = art.path.split('@')[0].replace('/arts/', '')
            if (name !== 'arts.json') {
                arts.push({
                    name,
                    artist: '@' + art.path.split('@')[1].replace('.png', ''),
                    path: require(`../assets${art.path}`).default
                })
            }
        })

        return arts
    }

    return (
        <Container backgroundImage={fundo}>
            <Grid container direction="column" spacing={6}>
                <Grid container item xs={12}>
                    <Grid item xs={5}>
                        <CharacterViewer
                            name={"zoio de gato"}
                            artist={"@artista"}
                            art={characterTest}
                        />
                    </Grid>

                    <Grid item xs={7}>
                        <CharacterGrid
                            characters={arts}
                        />
                    </Grid>
                </Grid>

                <Grid container item xs={12} justify="space-between">
                    <Grid item xs={11}>
                        <MenuButton
                            small
                            source={back}
                            onClick={() => history.goBack()}
                        />
                    </Grid>

                    <Grid item xs={1}>
                        <MenuButton small source={mute} />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CharacterSelect;

import React, { useContext, useEffect } from "react";

import { Grid } from "@material-ui/core";

import { CharacterViewer, Container, MenuButton, CharacterGrid } from "../components";

import fundo from "../assets/fundo.png";
import back from "../assets/back.png";
import mute from "../assets/mute.png";

import { useHistory } from "react-router-dom";
import { StateContext } from "../contexts";

function CharacterSelect() {
    const context = useContext(StateContext);
    const history = useHistory();

    useEffect(() => {
        context.dispatch({ type: 'LOAD_ARTS' });
    }, [])

    if (!context.state.selectedArt) return null;

    return (
        <Container backgroundImage={fundo}>
            <Grid container direction="column" spacing={6}>
                <Grid container item xs={12}>
                    <Grid item xs={5}>
                        <CharacterViewer
                            name={context.state.selectedArt.name}
                            artist={context.state.selectedArt.artist}
                            art={context.state.selectedArt.path}
                        />
                    </Grid>

                    <Grid item xs={7}>
                        <CharacterGrid />
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

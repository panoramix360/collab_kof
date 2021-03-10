import React from "react";

import { Grid } from "@material-ui/core";

import { CharacterViewer, Container, Logo, MenuButton } from "../components";

import fundo from "../assets/fundo.png";
import back from "../assets/back.png";
import mute from "../assets/mute.png";
import characterTest from "../assets/arts/ALQUIMISTA_DO_ACRE_@thedanvelez.png";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({

});

function CharacterSelect() {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Container backgroundImage={fundo}>
            <Grid container direction="column" spacing={6}>
                <Grid container item xs={12}>
                    <Grid item xs={6}>
                        <CharacterViewer
                            name={"zoio de gato"}
                            artist={"@artista"}
                            art={characterTest}
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

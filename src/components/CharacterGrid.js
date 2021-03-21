import React, { useEffect, useState, useCallback, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import grade from "../assets/grade.png";
import selector from "../assets/selector.png";
import oneSelected from "../assets/01V.png";
import twoSelected from "../assets/02A.png";
import threeSelected from "../assets/03V.png";
import ok from "../assets/ok.png";
import { MenuButton } from ".";

import { StateContext } from "../contexts";

const useStyles = makeStyles({
    background: {
        display: "flex",
        flexWrap: "wrap",
        height: "45rem",
        position: "relative",
        backgroundImage: `url(${grade})`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    characterBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "12.5%",
        height: "12.5%",
        position: "relative",
    },
    characterImage: {
        width: "auto",
        height: "100%",
    },
    characterSelection: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${selector})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    selectedCharacterBox: {
        position: "absolute",
        top: "14rem",
        left: "1rem",
    },
    selectedCharacterLine: {
        display: "flex",
        alignItems: "center",
        "& span": {
            fontSize: "1rem",
            color: "white",
            marginLeft: "1rem",
        },
        "& img": {
            height: "3rem",
        },
    },
});

function CharacterGrid() {
    const classes = useStyles();
    const context = useContext(StateContext);
    const [selection, setSelection] = useState(0);

    const handleKeyDown = useCallback(
        (event) => {
            function setSelectedArt(index) {
                setSelection(index);
                context.dispatch({ type: "SELECT_ART", payload: { index } });
            }

            switch (event.key) {
                case "ArrowLeft": {
                    const index = Math.max(0, selection - 1);
                    setSelectedArt(index);
                    break;
                }
                case "ArrowRight": {
                    const index = Math.min(
                        context.state.arts.length - 1,
                        selection + 1
                    );
                    setSelectedArt(index);
                    break;
                }
                case "ArrowUp": {
                    const index = Math.max(0, selection - 8);
                    setSelectedArt(index);
                    break;
                }
                case "ArrowDown": {
                    const index = Math.min(
                        context.state.arts.length - 1,
                        selection + 8
                    );
                    setSelectedArt(index);
                    break;
                }
                default:
                    break;
            }
        },
        [context.state.arts.length, selection]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    function _buildCharacterGrid(path, index) {
        if (path) {
            return (
                <>
                    <img
                        src={path}
                        alt="art"
                        className={classes.characterImage}
                    />
                    {index === selection && (
                        <div className={classes.characterSelection}></div>
                    )}
                </>
            );
        } else {
            return null;
        }
    }

    return (
        <div className={classes.background}>
            {context.state.arts.map((character, index) => (
                <div key={index} className={classes.characterBox}>
                    {_buildCharacterGrid(character.path, index)}
                </div>
            ))}

            <div className={classes.selectedCharacterBox}>
                <Grid container spacing={4}>
                    <Grid
                        item
                        xs={12}
                        className={classes.selectedCharacterLine}
                    >
                        <img src={oneSelected} alt="primeiro personagem" />
                        <span>{context.state.selectedArt.artist}</span>
                    </Grid>

                    {
                        context.state.selectedArt.alternatives &&
                        context.state.selectedArt.alternatives.map((character, index) => (
                            <Grid
                                item
                                xs={12}
                                className={classes.selectedCharacterLine}
                            >
                                <img src={index === 0 ? twoSelected : threeSelected} alt="segundo personagem" />
                                <span>{character.artist}</span>
                            </Grid>
                        ))
                    }

                    <Grid item xs={12}>
                        <MenuButton source={ok} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default CharacterGrid;

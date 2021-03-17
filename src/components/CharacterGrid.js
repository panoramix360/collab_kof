import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import grade from "../assets/grade.png";
import selector from "../assets/selector.png";
import oneSelected from "../assets/01V.png";
import twoSelected from "../assets/02A.png";
import threeSelected from "../assets/03V.png";
import ok from "../assets/ok.png";
import { MenuButton } from ".";

const useStyles = makeStyles({
    background: {
        display: "flex",
        flexWrap: "wrap",
        height: "45rem",
        position: 'relative',
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
        top: '14rem',
        left: '1rem'
    },
    selectedCharacterLine: {
        display: 'flex',
        alignItems: 'center',
        '& span': {
            fontSize: '1.5rem',
            color: 'white',
            marginLeft: '1rem'
        },
        '& img': {
            height: '3rem'
        }
    }
});

function CharacterGrid({ characters }) {
    const classes = useStyles();
    const [filteredCharacters, setFilteredCharacters] = useState(characters);
    const [selection, setSelection] = useState(0);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        if (filteredCharacters.length > 0) {
            const newFilteredCharacters = [...filteredCharacters]
            const startIndex = 16
            const rowsCount = 4
            for(let i = 0, startIndex = 16; i < 4; i++, startIndex += 8) {
                newFilteredCharacters.splice(startIndex, 0, {})
                newFilteredCharacters.splice(startIndex + 1, 0, {})
                newFilteredCharacters.splice(startIndex + 2, 0, {})
            }
            setFilteredCharacters(newFilteredCharacters)
        }
    }, []);

    function handleKeyDown(event) {
        switch (event.key) {
            case "ArrowLeft":
                setSelection(Math.max(0, selection - 1));
                break;
            case "ArrowRight":
                setSelection(Math.min(characters.length + 1, selection + 1));
                break;
            case "ArrowUp":
                setSelection(Math.max(0, selection - 8));
                break;
            case "ArrowDown":
                setSelection(Math.min(characters.length + 1, selection + 8));
                break;
        }
    }

    function _buildCharacterGrid(path, index) {
        if (path) {
            return (
                <>
                    <img
                        src={path}
                        alt="art"
                        className={classes.characterImage}
                    />
                    {index == selection && (
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
            {filteredCharacters.map((character, index) => (
                <div key={index} className={classes.characterBox}>
                    {_buildCharacterGrid(character.path, index)}
                </div>
            ))}

            <div className={classes.selectedCharacterBox}>
                <Grid container spacing={4}>
                    <Grid item xs={12} className={classes.selectedCharacterLine}>
                        <img src={oneSelected} alt="primeiro personagem" />
                        <span>Personagem</span>
                    </Grid>

                    <Grid item xs={12} className={classes.selectedCharacterLine}>
                        <img src={twoSelected} alt="segundo personagem" />
                        <span>Personagem</span>
                    </Grid>
                    <Grid item xs={12} className={classes.selectedCharacterLine}>
                        <img src={threeSelected} alt="terceiro personagem" />
                        <span>Personagem</span>
                    </Grid>

                    <Grid item xs={12}>
                        <MenuButton source={ok} />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default CharacterGrid;

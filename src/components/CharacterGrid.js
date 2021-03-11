import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import grade from "../assets/grade.png";
import selector from "../assets/selector.png";

const useStyles = makeStyles({
    background: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '45rem',
        backgroundImage: `url(${grade})`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    characterBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '12.5%',
        height: '12.5%',
        position: 'relative'
    },
    characterImage: {
        width: 'auto',
        height: '100%'
    },
    characterSelection: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${selector})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
})

function CharacterGrid({ characters }) {
    const classes = useStyles()
    const [selection, setSelection] = useState(0)

    function handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowLeft':
                setSelection(Math.max(0, selection - 1))
                break;
            case 'ArrowRight':
                setSelection(Math.min(62, selection + 1))
                break;
            case 'ArrowUp':
                setSelection(Math.max(0, selection - 8))
                break;
            case 'ArrowDown':
                setSelection(Math.min(62, selection + 8))
                break;
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    return (
        <div className={classes.background}>
            {
                characters.map((character, index) => (
                    <div key={index} className={classes.characterBox}>
                        <img src={character.path} alt="art"  className={classes.characterImage} />

                        {
                            index == selection &&
                            <div className={classes.characterSelection}></div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default CharacterGrid
import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import fundoNome from "../assets/fundoNome.png";

const useStyles = makeStyles({
    background: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        border: '2px solid red',
        backgroundImage: ({ art }) => `url(${art})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: '45rem'
    },
    container: {
        marginTop: '10rem'
    },
    artistName: {
        color: 'white',
        flex: 1,
        marginBottom: '-2rem'
    },
    drawName: {
        flex: 2,
        textAlign: 'center',
        color: 'white',
        fontSize: '4rem',
        padding: '2rem',
        marginBottom: '-4.5rem',
        backgroundImage: `url(${fundoNome})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    }
})

function CharacterViewer({ name, artist, art }) {
    const classes = useStyles({
        art
    })

    return (
        <div className={classes.background}>
            <span style={{ flex: 97 }}></span>
            <span className={classes.artistName}>{artist}</span>
            <span className={classes.drawName}>{name}</span>
        </div>
    )
}

export default CharacterViewer
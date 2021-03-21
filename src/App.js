import React, { useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from "./screens/Menu";
import CharacterSelect from "./screens/CharacterSelect";

import json from "./assets/arts/arts.json";
import { StateContext } from "./contexts";

function artReducer(state, action) {
    switch (action.type) {
        case "LOAD_ARTS":
            let arts = [];
            json.arts.forEach((art) => {
                const name = art.path.split("@")[0].replace("/arts/", "");
                if (name !== "arts.json") {
                    let artObj = {
                        name,
                        artist:
                            "@" + art.path.split("@")[1].replace(".png", ""),
                        path: require(`./assets${art.path}`).default,
                    };

                    if (art.alternatives) {
                        artObj.alternatives = [];
                        art.alternatives.forEach((path) => {
                            artObj.alternatives.push({
                                name,
                                artist:
                                    "@" +
                                    path.split("@")[1].replace(".png", ""),
                                path: require(`./assets${path}`).default,
                            });
                        });
                    }
                    arts.push(artObj);
                }
            });

            for (let i = 0, startIndex = 16; i < 4; i++, startIndex += 8) {
                arts.splice(startIndex, 0, {});
                arts.splice(startIndex + 1, 0, {});
                arts.splice(startIndex + 2, 0, {});
            }
            return {
                ...state,
                arts,
                selectedArt: arts[0],
            };
        case "SELECT_ART":
            return {
                ...state,
                selectedArt: state.arts[action.payload.index],
            };
        default:
            break;
    }
}

function App() {
    const [state, dispatch] = useReducer(artReducer, {
        arts: [],
        selectedArt: null,
    });
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            <Router>
                <Switch>
                    <Route path="/character-select">
                        <CharacterSelect />
                    </Route>
                    <Route path="/">
                        <Menu />
                    </Route>
                </Switch>
            </Router>
        </StateContext.Provider>
    );
}

export default App;

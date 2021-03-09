import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from './screens/Menu'
import CharacterSelect from './screens/CharacterSelect'

function App() {
    return (
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
    )
}

export default App;

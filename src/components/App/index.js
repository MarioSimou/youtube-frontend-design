import React from 'react'
import { Switch , Route } from 'react-router-dom'

// components
import Youtube from '../Youtube'
import Home from '../Home'


const App = props =>{
    return(
        <Switch>
            <Route 
                path='/video/:id'
                component={ Youtube }
            />
            <Route 
                exact
                path='/'
                component={ Home }
            />

        </Switch>
    )
}

export default App
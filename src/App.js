import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import './App.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/chat' component={Chat} />
                <Route path='/' component={Join} />
            </Switch>
        </Router>
    )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import Navigation from './navigation'
import List from './list'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <List />
            </div>
        )
    }
}

export default Home;
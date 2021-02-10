import React, { Component } from 'react'

export default class App extends Component {
    
    state = {
        astros: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({
                astros: data
            })
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

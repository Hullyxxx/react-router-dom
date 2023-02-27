import React, { Component, PureComponent } from 'react'

export default class HeaderLifeCycle extends PureComponent {
    componentDidMount() {
        console.log('Did-Mount - Header')
    }
    render() {
        console.log('Re-Render-Header')
        return (
            <div className='p-5 bg-warning'>
                HeaderLifeCycle
            </div>
        )
    }
}

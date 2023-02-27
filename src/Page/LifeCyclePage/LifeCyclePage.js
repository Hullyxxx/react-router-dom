import React, { Component } from 'react'
import HeaderLifeCycle from './HeaderLifeCycle';

export default class LifeCyclePage extends Component {
    state = {
        number: 1,
    }
    componentDidMount() {
        console.log('Did mount - Parent')
        let count = 1000;
        // this.countDown = setInterval(() => {
        //     count--;
        //     console.log('count down', count)
        // }, 1000)
    }
    componentDidUpdate(preProps, preState) {
        console.log('preProps ', preProps)
        console.log('preProps ', preState)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
        // clearInterval(this.countDown)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log({ nextProps, nextState })
        if (nextState.number > 5) {
            return false
        } else {
            return true
        }
    }
    render() {
        console.log('Re Render Parent')
        return (
            <div className='container'>
                <h1>LifeCyclePage</h1>
                <HeaderLifeCycle />
                <button className='btn btn-danger'
                    onClick={() => {
                        this.setState({
                            number: this.state.number - 1
                        })
                    }}
                >-</button>
                <strong className='mx-3'>{this.state.number}</strong>
                <button className='btn btn-success'
                    onClick={() => {
                        this.setState({
                            number: this.state.number + 1
                        })
                    }}
                >+</button>
            </div>
        )
    }
}

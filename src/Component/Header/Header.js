import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className='py-3 border-bottom'>
                <button className='btn btn-primary'>
                    <NavLink className='text-white' to={'/'}> Hompage</NavLink>
                </button>
                <button className='btn btn-primary mx-5'>
                    <NavLink className='text-white' to={'/login'}> Login Page</NavLink>
                </button>
                <button className='btn btn-primary mx-5'>
                    <NavLink className='text-white' to={'/life-cycle'}> Life Cycle</NavLink>
                </button>
            </div>
        )
    }
}

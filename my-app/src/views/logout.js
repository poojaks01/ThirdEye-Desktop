import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    constructor(props){
        super()
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <div className="container">
                  <div className="subpages" >
                      <h1 className="h1" >you have been logged out</h1>
                       <Link to="/">Login Again</Link>
            
                    </div>
                </div>
            </div>
        )
    }
}

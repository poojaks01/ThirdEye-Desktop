import React, { Component } from 'react'
import '../App.css'
import { Redirect, Link } from 'react-router-dom'



export default class Login extends Component {
    constructor(props){
        super();
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
       
        this.state={
            username:"",
            password:"",
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e){
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    submitForm(e){
        e.preventDefault()
        const { username, password} = this.state
        //for login
        if (username === "pooja" && password === "123456789"){
            localStorage.setItem("token", "abcdefghijklmnop")
            this.setState({
                loggedIn: true
            })
        } 

    }


    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin" />
            
        }
        return (
           <div>
             

               <form onSubmit={this.submitForm}>
                    <h2 className="login_heading">Login Form</h2>
                       <div className="container">
                            
                            <div className="content">
                              <label for="username"><b>Username: </b></label>
                              <input type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.onChange} required /><br /><br />

                               <label for="password"><b>Password: </b></label>
                                <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.onChange} required /><br /><br />
        
                                <button type="submit">Login</button>
                            </div>
                        </div>
               </form>
  
            </div>
        )
    }
}

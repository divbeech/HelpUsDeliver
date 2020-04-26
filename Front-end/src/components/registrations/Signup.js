import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
    };
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };


  redirect = () => {
    this.props.history.push('/')
  }

  
  handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul> 
      </div>
    )
  }

  render() {
    const {username, email, password, password_confirmation} = this.state
    
    return (
      <div className="container">
        <div>
          <h1>Help Us Deliver</h1>
        </div>
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group col-md-6" >
              <label for="username">Choose a user name</label>
              <input
                placeholder="username"
                className="form-control"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label for="username">Enter an email address:</label>
              <input
                placeholder="email"
                className="form-control"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-md-6">
              <input 
                placeholder="password"
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group col-md-6">
              <input
                placeholder="password confirmation"
                className="form-control"
                type="password"
                name="password_confirmation"
                value={password_confirmation}
                onChange={this.handleChange}
              />
            </div>
          
            <button placeholder="submit" type="submit">
              Sign Up
            </button>
            <br/>
            <br/>
            <div>
              or <button className="btn btn-light btn-sm"><Link to='/login'>sign in</Link></button>
            </div>
          </form>
          <div>
            {
              this.state.errors ? this.handleErrors() : null
            }
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
import React, { Component } from 'react';
import Style from './SignUpPage.module.css';
import { Link } from 'react-router-dom';
import APIService from './APIService';
import axios from 'axios';

const SIGNUP = "http://localhost:8080/KoreraItlize/user/createuser";

class SignUpPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '', password: '', firstname: '',
            lastname: '', email: '', phone: '', role: 'User', projectlist: [],
            isValid: true
        }
        console.log("in constructor of signuppage");
    }

    //Working signup
    add = (event) => {
        event.preventDefault();
        if (this.state.username === "" || this.state.password === "" || this.state.firstname === "" ||
            this.state.lastname === "" || this.state.email === "" || this.state.phone === "") {
            alert("All fields are manditory");
            this.setState({ isValid: false });
            return;
        }
        this.setState({ isValid: true })
        let formdata1 = new FormData();
        console.log("Signup function props.state: ", this.state)
        formdata1.append("name", this.state.username);
        formdata1.append("pass", this.state.password);
        formdata1.append("fname", this.state.firstname);
        formdata1.append("lname", this.state.lastname);
        formdata1.append("email", this.state.email);
        formdata1.append("phone", this.state.phone);
        axios.put(SIGNUP, formdata1)
        this.setState({ username: '', password: '', firstname: '', lastname: '', email: '', phone:'', isValid: true }); //reset form
        this.props.history.push("/");
    }

        render(){
            return (
                <div className={Style.page}>
                    <h2>Sign Up</h2>
                    <form className={Style.box}>
                        <label>Username: </label>
                        <br />
                        <input type="text" name="username"
                            value={this.state.username}
                            onChange={(event) => { this.setState({ username: event.target.value }) }}                        />
                        <br />
                        <label>Password: </label>
                        <br />
                        <input type="text" name="password"
                            value={this.state.password}
                            onChange={(event) => { this.setState({ password: event.target.value }) }} />
                        <br />
                        <label>First Name: </label>
                        <br />
                        <input type="text" name="firstname"
                            value={this.state.firstname}
                            onChange={(event) => { this.setState({ firstname: event.target.value }) }}
                        />
                        <br />
                        <label>Last Name: </label>
                        <br />
                        <input type="text" name="lastname"
                            value={this.state.lastname}
                            onChange={(event) => { this.setState({ lastname: event.target.value }) }}                        />
                        <br />
                        <label>Email Address: </label>
                        <br />
                        <input type="text" name="email"
                            value={this.state.email}
                            onChange={(event) => { this.setState({ email: event.target.value }) }}                        />
                        <br />
                        <label>Phone Number: </label>
                        <br />
                        <input type="text" name="phone"
                            value={this.state.phone}
                            onChange={(event) => { this.setState({ phone: event.target.value }) }}                        />
                        <br />
                        <br />
                        <button className={Style.button} onClick={this.add }>Sign Up</button>
                        <Link to='/'>
                            <button className={Style.button}>Cancel</button>
                        </Link>
                    </form>
                </div>
            );
        }
}
export default SignUpPage;
import React, { Component } from 'react';
import Style from './SignUpPage.module.css';
import { Link } from 'react-router-dom';

class SignUpPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '', username: '', password: '', firstname: '',
            lastname: '', email: '', phone: '', role: '', projectlist: [],
            isValid: true
        }
        console.log("in constructor of signuppage");
    }
        render(){
            return (
                <div className={Style.page}>
                    <h2>Sign Up</h2>
                    <form className={Style.box}>
                        <label>Username: </label>
                        <br />
                        <input type="text" name="username" />
                        <br />
                        <label>Password: </label>
                        <br />
                        <input type="text" name="password" />
                        <br />
                        <label>First Name: </label>
                        <br />
                        <input type="text" name="firstname" />
                        <br />
                        <label>Last Name: </label>
                        <br />
                        <input type="text" name="lastname" />
                        <br />
                        <label>Email Address: </label>
                        <br />
                        <input type="text" name="email" />
                        <br />
                        <label>Phone Number: </label>
                        <br />
                        <input type="text" name="phone" />
                        <br />
                        <br />
                        <Link to="/">
                            <button className={Style.button}>Sign Up</button>
                        </Link>
                    </form>
                </div>
            );
        }
}
export default SignUpPage;
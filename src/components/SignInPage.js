import React, { Component } from 'react';
import SignUpPage from './SignUpPage';
import Style from './SignInPage.module.css';
import { Link } from 'react-router-dom';
import APIService from './APIService';

class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '', username: '', password: '', firstname: '',
            lastname: '', email: '', phone: '', role: '', projectlist: [],
            isValid: true,
            users:[] //array of users from spring application
        }
        console.log("in signinpage");
    }

    componentDidMount() {
        APIService.SignIn().then((data) => {
            console.log("data from signin: ", data)
        },
            (error) => {
                console.log("Can't get sign in", error)
            }
        )

        APIService.getuser().then((data) => {
            console.log("Data from spring: ", data)
        })
            .catch(function (ex) {
                console.log('Response failed why: ',ex)
            })
    }

    render() {
        return (
            <div className={Style.page }>
                <div className={Style.box}>
                    <h2>
                        Login
                    </h2>
                    <br /><br />
                    <div>
                        <form>
                            <label className={Style.label}>
                                Username
                            </label>
                            <br />
                            <input type="text" name="username" value={this.state.username}
                                onChange={(event) => {
                                    this.setState({ username: event.target.value })
                                }}
                            />
                            <br />
                            <label className={Style.label}>
                                Password
                            </label>
                            <br />
                            <input type='text' name='password' value={this.state.password}
                                onChange={(event) => {
                                    this.setState({ password: event.target.value })
                                }}
                            />
                            <br />
                            <br />
                            <br />
                            <button className={Style.button}>Login</button>
                            <Link to="/signup">
                                <button className={Style.button}>Sign Up</button>
                            </Link>
                        </form>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default SignInPage;
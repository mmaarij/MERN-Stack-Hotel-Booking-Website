import React, { useState, useEffect } from "react";
import './Modal.css'
import axios from "axios";
// import M from 'materialize-css'

export class LogIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            name: "",
            phone:"",
            loading: false,
            error: "",
            success: ""
        }

    }

    setEmail = (emailIn) => {
        this.setState(state => ({
            email: emailIn
        }))
        console.log(emailIn)
    }

    setPassword = (passIn) => {
        this.setState(state => ({
            password: passIn
        }))
        console.log(passIn)
    }

    setError = (err) => {
        this.setState(state => ({
            error: err
        }))
        console.log(err)
    }

    LoginHandle = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/users/sign_in";
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            const { data: res } = await axios.post(url, data);
            console.log(res.data)
            console.log(res.name)
            localStorage.setItem("token", res.data);
            localStorage.setItem("currentUser", res.name);
            localStorage.setItem("currentUserEmail", res.email);
            window.location = "/SearchRooms";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                this.setError(error.response.data.message);
            }
        }
    };



    GoogleHandle = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/auth/google";
            const data = {
            }
            const { data: res } = await axios.get(url, data);
            console.log(res.data)
            console.log(res.name)
            localStorage.setItem("token", res.data);
            localStorage.setItem("currentUser", res.name);
            localStorage.setItem("currentUserEmail", res.email);
            window.location = "/SearchRooms";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                this.setError(error.response.data.message);
            }
        }
    };

    FacebookHandle = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/auth/facebook";
            const data = {
            }
            const { data: res } = await axios.get(url, data);
            console.log(res.data)
            console.log(res.name)
            localStorage.setItem("token", res.data);
            localStorage.setItem("currentUser", res.name);
            localStorage.setItem("currentUserEmail", res.email);
            window.location = "/SearchRooms";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                this.setError(error.response.data.message);
            }
        }
    };

    LoginModal() {

        return (
            <div className="modal py-5" tabIndex="-1" role="dialog"
                 id="modalLogin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-end p-0">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"/>
                                    </div>
                                    <div className="col-12 mb-2 d-flex justify-content-center">
                                        <img src={require('./imgs/logoBlueFilledPNG.png')} style={{height: "110px"}} alt="Serenity"/>

                                    </div>
                                    <div className="col-12 d-flex justify-content-center">
                                        <h2 id="custom-colour" className="fw-bold mb-0">Log In</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-body p-5 pt-0 border-bottom-0">
                            <form onSubmit={this.LoginHandle}>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-4" id="floatingInput"
                                        placeholder="name@example.com"
                                        onChange={(e) => {
                                            this.setEmail(e.target.value);
                                        }}/>
                                    <label id="custom-colour" htmlFor="floatingInput">Email Address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-4" id="floatingPassword"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            this.setPassword(e.target.value);
                                        }} />
                                    <label id="custom-colour" htmlFor="floatingPassword">Password</label>
                                </div>

                                <button id="signup-btn" className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                                    type="submit">Log In
                                </button>

                                {this.state.error &&
                                    <div className="row">
                                    <small className="text-danger text-center">{this.state.error}</small>
                                    </div>
                                }

                                <div className="container">
                                    <div className="row">
                                        <div className="col-6 d-flex justify-content-start ps-4">

                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="flexCheckDefault"/>

                                            <small id="custom-colour" className="text-muted">
                                                &nbsp;Remember Me
                                            </small>

                                        </div>
                                        <div className="col-6 d-flex justify-content-end p-0">
                                            <small id="custom-colour" className="text-muted">
                                                <a id="custom-link" href="#" data-bs-toggle="modal" data-bs-target="#modalForgot">
                                                    Forgot Password?
                                                </a>
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </form>

                                <hr className="my-4"/>
                                <h2 id="custom-colour" className="fs-5 fw-bold mb-3">Or use a third-party</h2>

                            <form onClick={this.FacebookHandle}>
                                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                                    <i className="bi-facebook" role="img" aria-label="GitHub"/>
                                    &nbsp;Log In with Facebook
                                </button>
                                </form>

                            <form onClick={this.GoogleHandle}>
                                <button className="w-100 py-2 btn btn-outline-warning rounded-4" type="submit">
                                    <i className="bi-google" role="img" aria-label="GitHub"/>
                                    &nbsp;Log In with Google
                                </button>
                                </form>


                            
                        </div>

                        <div className="modal-footer d-flex justify-content-center border-bottom-0">

                            <small className="text-muted">Dont't have an account?&nbsp;
                                <a id="custom-link" href="#" data-bs-target="#modalSignin" data-bs-toggle="modal">
                                    Sign Up

                                </a>
                            </small>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            this.LoginModal()
        );
    }
}

export class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            name: "",
            phone: "",
            loading: false,
            error: "",
            success: ""
        }

    }

    setEmail = (emailIn) => {
        this.setState(state => ({
            email: emailIn
        }))
        console.log(emailIn)
    }

    setPassword = (passIn) => {
        this.setState(state => ({
            password: passIn
        }))
        console.log(passIn)
    }

    setPhone = (phIn) => {
        this.setState(state => ({
            phone: phIn
        }))
        console.log(phIn)
    }

    setName = (nameIn) => {
        this.setState(state => ({
            name: nameIn
        }))
        console.log(nameIn)
    }

    setError = (err) => {
        this.setState(state => ({
            error: err
        }))
        console.log(err)
    }


    SignupHandle = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/users/sign_up";
            const data = {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                phone: this.state.phone,
            }
            const { data: res } = await axios.post(url, data);
            console.log(res.data)
            localStorage.setItem("token", res.data);
            window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                 this.setError(error.response.data.message);
            }
        }
    };


    GoogleHandle = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/auth/google";
            const data = {
            }
            const { data: res } = await axios.get(url, data);
            console.log(res.data)
            console.log(res.name)
            localStorage.setItem("token", res.data);
            localStorage.setItem("currentUser", res.name);
            localStorage.setItem("currentUserEmail", res.email);
            window.location = "/SearchRooms";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                this.setError(error.response.data.message);
            }
        }
    };

    FacebookHandle = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:3000/auth/facebook";
            const data = {
            }
            const { data: res } = await axios.get(url, data);
            console.log(res.data)
            console.log(res.name)
            localStorage.setItem("token", res.data);
            localStorage.setItem("currentUser", res.name);
            localStorage.setItem("currentUserEmail", res.email);
            window.location = "/SearchRooms";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                this.setError(error.response.data.message);
            }
        }
    };

    SignupModal() {
        return (
            <div className="modal py-5" tabIndex="-1" role="dialog"
                 id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 d-flex justify-content-end p-0">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"/>

                                    </div>
                                    <div className="col-12 mb-2 d-flex justify-content-center">
                                        <img src={require('./imgs/logoBlueFilledPNG.png')} style={{height: "110px"}} alt="Serenity"/>

                                    </div>
                                    <div className="col-12 d-flex justify-content-center">
                                        <h2 id="custom-colour" className="fw-bold mb-0">Sign Up</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-body p-5 pt-0 border-bottom-0">
                            <form onSubmit={this.SignupHandle}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-4" id="floatingInput"
                                        placeholder="John Doe"
                                        onChange={(e) => {
                                            this.setName(e.target.value);
                                        }} />
                                    <label id="custom-colour" htmlFor="floatingInput">Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-4" id="floatingInput"
                                        placeholder="name@example.com"
                                        onChange={(e) => {
                                            this.setEmail(e.target.value);
                                        }} />
                                    <label id="custom-colour" htmlFor="floatingInput">Email Address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control rounded-4" id="floatingInput"
                                        placeholder="+92 XXX XXXXXXX"
                                        onChange={(e) => {
                                            this.setPhone(e.target.value);
                                        }} />
                                    <label id="custom-colour" htmlFor="floatingInput">Phone</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-4" id="floatingPassword"
                                        placeholder="Password"
                                        onChange={(e) => {
                                            this.setPassword(e.target.value);
                                        }} />
                                    <label id="custom-colour" htmlFor="floatingPassword">Password</label>
                                </div>

                                <small id="custom-colour" className="text-muted">By clicking Sign up, you agree to the
                                    terms of
                                    use.
                                </small>

                                <br></br><br></br>

                                <button id="signup-btn" className="w-100 mb-2 btn btn-lg rounded-4 btn-primary"
                                        type="submit">Sign Up
                                </button>

                                {this.state.error &&
                                    <div className="row">
                                        <small className="text-danger text-center">{this.state.error}</small>
                                    </div>
                                }


                                <hr className="my-4"/>
                                <div className="d-flex justify-content-center">
                                <h2 id="custom-colour" className="fs-5 fw-bold mb-3">Or use a third-party</h2>
                                </div>
                            </form>

                            <form onClick={this.FacebookHandle}>
                                <button className="w-100 py-2 mb-2 btn btn-outline-primary rounded-4" type="submit">
                                    <i className="bi-facebook" role="img" aria-label="GitHub"/>
                                    &nbsp;Sign Up with Facebook
                                </button>
                                </form>

                            <form onClick={this.GoogleHandle}>
                                <button className="w-100 py-2 btn btn-outline-warning rounded-4" type="submit">
                                    <i className="bi-google" role="img" aria-label="GitHub"/>
                                    &nbsp;Sign Up with Google
                                </button>
                                </form>
                            
                        </div>

                        <div className="modal-footer d-flex justify-content-center border-bottom-0">

                            <small className="text-muted">Already have an account?&nbsp;
                                <a id="custom-link" href="#" data-bs-target="#modalLogin" data-bs-toggle="modal">
                                    Log In
                                </a>
                            </small>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render = () => {
        return (
            this.SignupModal()
        );
    }
}

const ResetPassword = () => {
    const [email, setEmail] = useState("")

    const PostData = () => {
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            // M.toast({ html: "invalid email", classes: "#c62828 red darken-3" })
            return
        }
        const data = {
            email: email
        }
        axios.post('http://localhost:3000/users/reset_password', data)
            .then(data => {
                if (data.error) {
                    // M.toast({ html: data.error, classes: "#c62828 red darken-3" })
                }
                //    else{
                //        M.toast({html:data.message,classes:"#43a047 green darken-1"})
                //        history.push('/signin')
                //    }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <div class="modal py-5" tabIndex="-1" role="dialog"
            id="modalForgot">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-5 shadow">
                    <div class="modal-header p-5 pb-4 border-bottom-0">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 d-flex justify-content-end p-0">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" />
                                </div>
                                <div class="col-12 mb-2 d-flex justify-content-center">
                                    <img src={require('./imgs/logoBlueFilledPNG.png')} style={{ height: "110px" }} alt="Serenity" />

                                </div>
                                <div class="col-12 d-flex justify-content-center">
                                    <h2 id="custom-colour" class="fw-bold mb-0">Reset Your Password</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-body p-5 pt-0 border-bottom-0">

                        <div class="form-floating mb-3">
                            <input type="email" class="form-control rounded-4" id="floatingInput" onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com" />
                            <label id="custom-colour" htmlFor="floatingInput">Email Address</label>
                        </div>

                        <small id="custom-colour" class="text-muted">
                            A verification code will be emailed to you. Please submit that at next step with
                            your new password and we are done.
                        </small>

                        <button id="signup-btn" class="w-100 mt-4 mb-2 btn btn-lg rounded-4 btn-primary" onClick={() => PostData()}
                            type="submit">Reset Password
                        </button>


                        <hr class="my-4" />

                        <div class="row">
                            <div class="col">
                                <p id="custom-colour" class="m-0 p-0">
                                    <strong>Contact Us</strong>
                                </p>
                                <a id="custom-link" href="#" class="m-0 p-0">
                                    bookings@serenity.pk
                                </a>
                            </div>
                            <div class="col offset-2">
                                <p id="custom-colour" class="m-0 p-0">
                                    <strong>Help Line</strong>
                                </p>
                                <a id="custom-link" href="tel:+923111444100" class="m-0 p-0">
                                    03-XXX-XXX-XXX
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
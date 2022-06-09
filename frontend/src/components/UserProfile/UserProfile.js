import React from "react";
import './UserProfile.css'
import axios from "axios";

export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePicturePath: "",
            profilePicture: "",
            email: localStorage.getItem("currentUserEmail"),
            currentPassword: "xxxxxxxx",
            newPassword: "xxxxxxxx",
            newConfirmPassword: "xxxxxxxx",
            phone: "03XXYYYYZZZ",
            name: "Name",
        }

        this.getDP();
    }

    setEmail = (emailIn) => {
        this.setState(state => ({
            email: emailIn
        }))
        console.log(emailIn)
    }

    setCurrentPassword = (passIn) => {
        this.setState(state => ({
            currentPassword: passIn
        }))
        console.log(passIn)
    }

    setNewPassword = (passIn) => {
        this.setState(state => ({
            newPassword: passIn
        }))
        console.log(passIn)
    }

    setConfirmNewPassword = (passIn) => {
        this.setState(state => ({
            newConfirmPassword: passIn
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

    selectProfilePicturePath = (event) => {
        this.setState({
            profilePicturePath: event.target.files[0]
        })
    }

    selectProfilePicture = (picIn) => {
        this.setState({
            profilePicture: picIn
        })
    }

    uploadProfilePicture = async (event) => {
        event.preventDefault();
        console.log(this.state.profilePicture)
        try {
            const url = "http://localhost:3000/users/upload_dp";
            const FormD = new FormData();
            FormD.append("profilePicture", this.state.profilePicturePath);
            FormD.append("email", this.state.email)

            const {data: res} = await axios.post(url, FormD);

            this.selectProfilePicture(res.profilePic)

            console.log(this.state.profilePicture)

            // localStorage.setItem("token", res.data);
            // window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                /* setError(error.response.data.message);*/
            }
        }
    }

    updateProfile = async (event) => {
        event.preventDefault();

        try {
            const url = "http://localhost:3000/users/update_profile";
            const data1 = {
                email: this.state.email,
                name: this.state.name,
                phone: this.state.phone
            }

            const {data: res} = await axios.post(url, data1);
            console.log("In")
            console.log(res.data)
            localStorage.setItem("currentUser", this.state.name)
            // localStorage.setItem("token", res.data);
            // window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                /* setError(error.response.data.message);*/
            }
        }

    }

    deleteProfile = async (event) => {
        event.preventDefault();
        try {
            const url = "http://localhost:3000/users/delete_profile";
            const data = {
                email: this.state.email,
            }
            const {data: res} = await axios.post(url, data);

            localStorage.removeItem("token");
            localStorage.removeItem("currentUser");
            localStorage.removeItem("currentUserEmail");
            window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                /* setError(error.response.data.message);*/
            }
        }
    };

    changePassword = async (event) => {
        event.preventDefault();
        try {
            const url = "http://localhost:3000/users/change_password";
            const data = {
                email: this.state.email,
                currentPassword: this.state.currentPassword,
                newPassword: this.state.newPassword
            }
            const {data: res} = await axios.post(url, data);
            console.log(res.data)
            // localStorage.setItem("token", res.data);
            // window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                /* setError(error.response.data.message);*/
            }
        }
    }


    getDP = async (event) => {
        try {
            const url = "http://localhost:3000/users/get_dp";
            const data = {
                email: this.state.email,
            }
            const { data: res } = await axios.post(url, data);
            console.log(res.imgUrl)
            this.selectProfilePicture(res.imgUrl)
            // localStorage.setItem("token", res.data);
            // window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                /* setError(error.response.data.message);*/
            }
        }
    }

    render() {
        return (
            <div className="container" id="body1">
                <div className="row">
                    <div className="col-12 mb-3">
                        {/*<h3 className="text-dark">Hi {this.state.userName}!</h3>*/}
                        <hr/>
                        <form id="updatePicture" className="file-upload1" encType="multipart/form-data"
                              name={"profilePicture"}>
                            {/*<h3 className="text-dark">Hi {this.state.userName}!</h3>*/}
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <div className="bg-dark px-41 py-51 rounded1">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0 text-warning">Upload your profile photo</h4>
                                            <div className="text-center">
                                                <div className="square1 position-relative display-2 mb-3 border-0">
                                                    {this.state.profilePicture ?
                                                        <img src={this.state.profilePicture} width={300} height={300}
                                                             alt={"..."}/> :
                                                        <img src={'http://localhost:3000/public/uploads/temp.jpg'}
                                                             alt={"..."}/>
                                                    }
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <div className="mb-3">
                                                        <input
                                                            className="form-control form-control-sm bg-dark text-white"
                                                            id="formFileSm"
                                                            type="file"
                                                            onChange={this.selectProfilePicturePath}
                                                            name="profilePicture"
                                                            accept="image/*"/>
                                                    </div>
                                                </div>
                                                <button type="button" className="btn btn-success btn-block"
                                                        onClick={this.uploadProfilePicture}
                                                        name="profilePicture">
                                                    Upload
                                                </button>

                                                <p className="text-danger mt-3 mb-0"><span
                                                    className="me-1">Note:</span>Maximum
                                                    size 2048px * 2048px</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>


                        <form id="updateProfile" onSubmit={this.updateProfile}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <div className="bg-dark px-41 py-51 rounded1 mb-3">
                                        <div className="row g-3">
                                            <h4 className="mb-4 mt-0 text-warning">Contact detail</h4>
                                            <div className="col-md-6">
                                                <label className="form-label">Name: *</label>
                                                <input type="text" className="form-control1"
                                                       aria-label="Name" placeholder={this.state.name}
                                                    onChange={(e) => this.setName(e.currentTarget.value)}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label className="form-label">Phone Number: *</label>
                                                <input type="text" className="form-control1"
                                                       aria-label="Phone number" placeholder={this.state.phone}
                                                    onChange={(e) => this.setPhone(e.currentTarget.value)}/>
                                            </div>

                                            <div className="col-md-6">
                                                <label htmlFor="inputEmail4" className="form-label">Email:</label>
                                                <input type="email" className="form-control1 mb-2" id="inputEmail4"
                                                    
                                                       placeholder={this.state.email}/>
                                                <p className="text-muted m-0"><span
                                                    className="me-1">Note:</span>You cannot change your email.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-warning btn-lg mx-1">
                                            Update profile
                                        </button>
                                    </div>

                                </div>
                                </div>
                                </form>

                            
                        <form id="updatePassword">
                            <div className="row">
                                <div className="col mb-3">
                                    <div className="bg-dark px-41 py-51 rounded1">
                                        <div className="row g-3">
                                            <h4 className="my-4 text-warning">Change Password</h4>
                                            <div className="col-6">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Old
                                                    password
                                                    *</label>
                                                <input type="password" className="form-control1"
                                                    id="exampleInputPassword1" onChange={(e) => this.setCurrentPassword(e.currentTarget.value)}/>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="exampleInputPassword2" className="form-label">New
                                                    password
                                                    *</label>
                                                <input type="password" className="form-control1"
                                                    id="exampleInputPassword2" onChange={(e) => this.setNewPassword(e.currentTarget.value)}/>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="exampleInputPassword3" className="form-label">Confirm
                                                    Password *</label>
                                                <input type="password" className="form-control1"
                                                       id="exampleInputPassword3"
                                                    onChange={(e) => this.setConfirmNewPassword(e.currentTarget.value)}/>
                                            </div>
                                        </div>

                                    </div>

                                    {
                                        (this.state.currentPassword === this.state.newPassword) && (this.state.currentPassword !== "") && (this.state.newPassword !== "") ?
                                            <p className="text-muted m-0">New Password and Current Password are same.
                                            </p>
                                            :
                                            <p></p>
                                    }

                                    {
                                        (this.state.newPassword === this.state.newConfirmPassword) && (this.state.newPassword !== "") && (this.state.newConfirmPassword !== "") ?
                                            <p></p>
                                            :
                                            <p className="text-muted m-0">Passwords Do Not Match
                                            </p>
                                    }

                                    {
                                        (this.state.newPassword === this.state.newConfirmPassword) && (this.state.currentPassword !== this.state.newPassword) ?
                                            <button type="button" className="btn btn-danger btn-lg mx-1"
                                                onClick={this.changePassword}>Change Password
                                            </button>
                                            :
                                            <div></div>

                                    }

                                </div>
                            </div>

                            <div className="row">
                                <div className="col mb-3">
                                    <div className=" d-flex justify-content-center text-center">
                                        <button type="button" className="btn btn-danger btn-lg mx-1"
                                                onClick={this.deleteProfile}>Delete profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    }
}

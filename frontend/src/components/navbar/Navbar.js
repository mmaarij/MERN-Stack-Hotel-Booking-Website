import './Navbar.css'
import React from "react";

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: localStorage.getItem("currentUser")
        }
        console.log(this.state.user)
    }

    signOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentUserEmail");
        window.location = "/";
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
                <div class="container">

                    <a href="/">
                        <img src={require('./img/logo.png')} alt="" style={{ height: "75px" }}></img>
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-lg-flex" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" id="fontnav" href="#">03-111-444-000</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id="fontnav" href="#">bookings@serenity.pk</a>
                            </li>
                        </ul>
                        <form class="d-lg-flex" action="/YourProfile">
                            {!this.state.user ?
                                <button type="button" id="btnCSS" className='ms-2' data-bs-toggle="modal" data-bs-target="#modalLogin" data-bs-whatever="Log In">Log In</button>
                                :
                                <div>
                                    <button type="submit" id="btnCSS" className='ms-2'>View Profile: {this.state.user}</button>
                                    <button type="button" id="btnCSS" className='ms-2' onClick={this.signOut}>Sign Out</button>
                                </div>
                            }

                        </form>

                    </div>
                </div>
            </nav>

        );

    }
}

export default Navbar;
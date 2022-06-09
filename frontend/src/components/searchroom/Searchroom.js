import './Searchroom.css'
import React from "react";
import axios from "axios";

class Searchroom extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            location: localStorage.getItem("s_loc"),
            checkin: localStorage.getItem("s_cin"),
            checkout: localStorage.getItem("s_cout"),
            rooms: localStorage.getItem("s_rooms"),
            priceMin: localStorage.getItem("s_pmin"),
            priceMax: localStorage.getItem("s_pmax")
        }

        if (!this.state.location)
            localStorage.setItem("s_loc", "")

        if (!this.state.rooms)
            localStorage.setItem("s_rooms", "1")

        if (!this.state.priceMin)
            localStorage.setItem("s_pmin", "0")

        if (!this.state.priceMax)
            localStorage.setItem("s_pmax", "50000")

    }

    setLocation = (param) => {
        localStorage.setItem("s_loc", param)
        this.setState(state => ({
            location: param
        }))
        console.log(param)
    }

    setCheckIn = (param) => {
        localStorage.setItem("s_cin", param)
        this.setState(state => ({
            checkin: param
        }))
        console.log(param)
    }

    setCheckOut = (param) => {
        localStorage.setItem("s_cout", param)
        this.setState(state => ({
            checkout: param
        }))
        console.log(param)
    }

    setRooms = (param) => {
        localStorage.setItem("s_rooms", param)
        this.setState(state => ({
            rooms: param
        }))
        console.log(param)
    }

    setPriceMin = (param) => {
        localStorage.setItem("s_pmin", param)
        this.setState(state => ({
            priceMin: param
        }))
        console.log(param)
    }

    setPriceMax = (param) => {
        localStorage.setItem("s_pmax", param)
        this.setState(state => ({
            priceMax: param
        }))
        console.log(param)
    }

    SearchHandle = async (e) => {
        localStorage.setItem("s_run", true)
        window.location = "/SearchRooms";
    };

    render() {
        return (
            <div class="container mt-4">
            <form onSubmit={this.SearchHandle}>
                <div>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Let's search with a city or place name..."
                            onChange={(e) => {
                                this.setLocation(e.target.value);
                            }}
                            value={this.state.location}
                        />
                    <datalist id="datalistOptions">
                        <option value="Islamabad">Islamabad</option>
                        <option value="Chitral">Chitral</option>
                        <option value="Hunza">Hunza</option>
                        <option value="Murree">Murree</option>
                        <option value="Nathia Gali">Nathia Gali</option>
                        <option value="Naran">Naran</option>
                        <option value="Swat">Swat</option>
                    </datalist>
                </div>

                <div class="row mt-3">

                    <div class="col-6 col-md-3">
                        <div class="input-group  mb-3">
                            <div class="input-group-prepend ">
                                <span class="input-group-text TextStyle" id="inputGroup-sizing-sm">Check In</span>
                            </div>
                                <input type="date" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => {
                                        this.setCheckIn(e.target.value);
                                    }}
                                    value={this.state.checkin}
                                />
                        </div>
                    </div>

                    <div class="col-6 col-md-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text TextStyle" id="inputGroup-sizing-sm">Check Out</span>
                            </div>
                                <input type="date" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => {
                                        this.setCheckOut(e.target.value);
                                    }}
                                    value={this.state.checkout}
                                />
                        </div>
                    </div>

                    {/*<div class = "col-6 col-md-3">*/}
                    {/*    <div class="input-group mb-3">*/}
                    {/*        <div class="input-group-prepend">*/}
                    {/*            <span class="input-group-text TextStyle" id="inputGroup-sizing-sm">Guests</span>*/}
                    {/*        </div>*/}
                    {/*        <input type="number" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='0'/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div class="col-6 col-md-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text TextStyle" id="inputGroup-sizing-sm">Rooms</span>
                            </div>
                                <input type="number" class="form-control " aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder='0'
                                    onChange={(e) => {
                                        this.setRooms(e.target.value);
                                    }}
                                    value={this.state.rooms}
                                />
                        </div>
                    </div>



                    <div class="col-6 col-md-3">
                        <button class="btn dropdwn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Price Range
                        </button>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <div class="rangebox">
                                <div class="color_gray">Min<br />
                                        <input type="text" placeholder="2000" class="PriceRangeField"
                                            onChange={(e) => {
                                                this.setPriceMin(e.target.value);
                                            }}
                                            value={this.state.priceMin}

                                        />
                                </div>
                                <div class="color_gray"> Max<br />
                                        <input type="text" placeholder="50000" class="PriceRangeField"
                                            onChange={(e) => {
                                                this.setPriceMax(e.target.value);
                                            }}
                                            value={this.state.priceMax}
                                        />
                                </div>
                            </div>
                        </ul>
                    </div>

                </div>

                <div class="row mb-3">


                    {/*<div class = "col-4 d-flex justify-content-start">*/}

                    {/*    <button class="btn dropdwn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">*/}
                    {/*    Facilities*/}
                    {/*    </button>*/}
                    {/*    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">*/}
                    {/*        <div class="form-check">*/}
                    {/*            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>*/}
                    {/*            <label class="form-check-label Checkdwn" for="flexCheckDefault">*/}
                    {/*                Free Breakfast*/}
                    {/*            </label> <br/>*/}

                    {/*            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>*/}
                    {/*            <label class="form-check-label Checkdwn" for="flexCheckDefault">*/}
                    {/*                Flat Screen TV*/}
                    {/*            </label> <br/>*/}

                    {/*            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>*/}
                    {/*            <label class="form-check-label Checkdwn" for="flexCheckDefault">*/}
                    {/*                Free Wifi*/}
                    {/*            </label> <br/>*/}

                    {/*            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>*/}
                    {/*            <label class="form-check-label Checkdwn" for="flexCheckDefault">*/}
                    {/*                Air Conditioning*/}
                    {/*            </label>*/}

                    {/*        </div>*/}
                    {/*    </ul>   */}
                    {/*</div>*/}

                    {/*<div class = "col-4 d-flex justify-content-start">*/}
                    {/*        <button class="btn dropdwn dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">*/}
                    {/*        Room Type*/}
                    {/*        </button>*/}
                    {/*        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">*/}
                    {/*            <div class="form-check ">*/}
                    {/*                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>*/}
                    {/*                <label class="form-check-label Checkdwn" for="flexCheckDefault">*/}
                    {/*                    DELUXE*/}
                    {/*                </label> <br/>*/}

                    {/*                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>*/}
                    {/*                <label class="form-check-label Checkdwn" for="flexCheckDefault">*/}
                    {/*                    STANDARD*/}
                    {/*                </label> <br/>*/}

                    {/*                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>*/}
                    {/*                <label class="form-check-label Checkdwn" for="flexCheckDefault">*/}
                    {/*                    ECONOMY*/}
                    {/*                </label> <br/>*/}

                    {/*                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>*/}
                    {/*                <label class="form-check-label Checkdwn" for="flexCheckDefault">*/}
                    {/*                    EXOTIC*/}
                    {/*                </label>*/}

                    {/*            </div>*/}
                    {/*        </ul>   */}

                    {/*</div> */}

                </div>

                <div class="row-xs mb-3 d-flex justify-content-end">
                        <button type="submit" class="btn searchbtn btn-sm">Search</button>
                </div>

                <div class="row">
                    <div class="col">
                        <h3 class="pt-4 pb-1 searchtext text-start">Search Results | 12 Hotels </h3>
                    </div>

                    <div class="col d-flex justify-content-end">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Map View</label>
                        </div>
                    </div>
                </div>

            </form>
            </div>
        );

    }
}

export default Searchroom;
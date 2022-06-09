import React from "react";
import './Cart.css'

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            GuestCount: 1,
            GuestTitle: "Guest",
            RoomCount: 1,
            RoomTitle: "Room",
            Price: 12500,
            PerNight: 12500
        }
    }

    AddGuests = () => {
        if (this.state.GuestCount >= 1)
            this.setState({GuestTitle: 'Guests'})

        this.setState({GuestCount: this.state.GuestCount + 1})
    }

    RemoveGuests = () => {
        if (this.state.GuestCount <= 2)
            this.setState({GuestTitle: 'Guest'})
        if (this.state.GuestCount > 1)
            this.setState({GuestCount: this.state.GuestCount - 1})
    }

    AddRoom = () =>
    {
        if (this.state.RoomCount >= 1)
            this.setState({RoomTitle: 'Rooms'})

        this.setState({RoomCount: this.state.RoomCount + 1})

        this.setState({Price: this.state.PerNight + this.state.Price})
    }

    RemoveRoom = () =>
    {
        if (this.state.RoomCount <= 2)
            this.setState({RoomTitle: 'Room'})
        if (this.state.RoomCount > 1)
        {
            this.setState({RoomCount: this.state.RoomCount - 1})

            this.setState({Price: this.state.Price - this.state.PerNight})
        }


    }

    CartModal() {
        return (
            <div className="modal py-5" tabIndex="-1" role="dialog"
                 id="cartModal">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content bg-dark rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0" id="custom-col">

                            <h2 className="fw-bold mb-0">Selected Rooms</h2>

                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>

                        <div className="modal-body bg-white p-5 pt-0">
                            <div className="container pt-2">
                                <div className="row">
                                    <div className="col-6 d-flex justify-content-start pt-1 p-0 m-0">
                                        <strong className="fs-5">Hotel Name</strong>
                                    </div>
                                    <div className="col-4 ps-5 m-0 pt-2">
                                        <strong
                                            className="fs-6">{this.state.GuestCount} {this.state.GuestTitle}</strong>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end p-0 m-0">
                                        <div className="col d-flex justify-content-end p-0 m-0">
                                            <input onClick={this.AddGuests} type="submit"
                                                   className="btn btn-warning btn-sm p-1" value="+"
                                                   style={{fontWeight: "bolder", fontSize: "large"}}/>
                                        </div>
                                        <div className="col d-flex justify-content-end p-0 m-0">
                                            <input onClick={this.RemoveGuests} type="submit"
                                                   class="btn btn-warning  btn-sm" value="-"
                                                   style={{fontWeight: "bolder", fontSize: "large"}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-1">
                                    <div className="col-6 d-flex justify-content-start pt-1 p-0 m-0">
                                        {/*<strong className="fs-5">Hotel Name</strong>*/}
                                    </div>
                                    <div className="col-4 ps-5 m-0 pt-2">
                                        <strong
                                            className="fs-6">{this.state.RoomCount} {this.state.RoomTitle}</strong>
                                    </div>
                                    <div className="col-2 d-flex justify-content-end p-0 m-0">
                                        <div className="col d-flex justify-content-end p-0 m-0">
                                            <input onClick={this.AddRoom} type="submit"
                                                   className="btn btn-warning btn-sm p-1" value="+"
                                                   style={{fontWeight: "bolder", fontSize: "large"}}/>
                                        </div>
                                        <div className="col d-flex justify-content-end p-0 m-0">
                                            <input onClick={this.RemoveRoom} type="submit"
                                                   className="btn btn-warning  btn-sm" value="-"
                                                   style={{fontWeight: "bolder", fontSize: "large"}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-8 p-0 m-0">
                                        <p className="text-start fs-6 text-muted">
                                            PKR {this.state.PerNight} per night (22nd April - 30th April)&nbsp;
                                            {this.state.RoomCount} Room x PKR {this.state.PerNight} x 1
                                            nights
                                        </p>
                                    </div>
                                    <div className="col-4 p-0 m-0">
                                        <h6 className="text-end">
                                            <strong>PKR {this.state.Price}</strong>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer p-5 pb-5" id="custom-col">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8 d-flex justify-content-start p-0 pt-2 m-0">
                                        <h5 className="fw-bold mb-0">Total PKR {this.state.Price}</h5>
                                    </div>
                                    <div className="col-4 d-flex justify-content-end p-0 m-0">
                                        <input type="submit" value="Proceed"
                                               className="text-black form-control bg-white rounded-1"
                                               style={{fontWeight: "bolder", fontSize: "large"}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            this.CartModal()
        );
    }
}
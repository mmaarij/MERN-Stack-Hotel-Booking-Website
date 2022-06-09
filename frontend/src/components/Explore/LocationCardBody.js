import React from "react";

class LocationCardBody extends React.Component {
  render() {
    return (
      <div
        className="card"
        style={{
          background:
            `url(${this.props.imgLink}) center / cover`
        }}
      >
        <div className="card-body cb">
          <h4 className="card-title">{this.props.CardTitle}</h4>
          <p className="card-text">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo
            odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non
            mi porta gravida at eget metus.
          </p>

          <form action={this.props.ExploreLink}>
          <button className="btn btn-info" type="submit" style={{marginTop: "50px"}}>
            Explore
          </button>
          </form>
          
        </div>
      </div>
    );
  }
}

export default LocationCardBody;

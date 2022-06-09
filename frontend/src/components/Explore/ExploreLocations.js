import React from "react";
import LocationCardBody from "./LocationCardBody";

class ExploreLocations extends React.Component {
  render() {
    return (
      <section data-aos="fade" data-aos-duration={700} id="section5">
        <h1 id="OurLocations">Explore Our Locations</h1>
        <div className="card-group" id="cardGroup">

          <LocationCardBody CardTitle='Islamabad'
          imgLink='https://upload.wikimedia.org/wikipedia/commons/f/fa/Faisal_Masjid_From_Damn_e_koh.jpg'
          ExploreLink = "https://goo.gl/maps/8SVQYnpcnSGJqyoBA"
          >
          </LocationCardBody>

          <LocationCardBody CardTitle='Chitral'
          imgLink='https://upload.wikimedia.org/wikipedia/commons/0/0e/The_City_of_Chitral_and_Tirich_Mir.jpg'
          ExploreLink = "https://goo.gl/maps/L1UextRtopoLEyno7"
          >
          </LocationCardBody>

          <LocationCardBody CardTitle='Hunza' 
          imgLink='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Rakaposhi%2C_Nagar_GB_%28Pakistan%29.jpg/1280px-Rakaposhi%2C_Nagar_GB_%28Pakistan%29.jpg'
          ExploreLink = "https://goo.gl/maps/p3tGQ5MzkUH8JdeN7"
          >
          </LocationCardBody>

          <LocationCardBody CardTitle='Murree' 
          imgLink='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sunset_in_hills_-_Holy_Trinity_Church%2C_Murree.jpg/1200px-Sunset_in_hills_-_Holy_Trinity_Church%2C_Murree.jpg'
          ExploreLink = "https://goo.gl/maps/2RCHsVKzQMF68dec9"
          >
          </LocationCardBody> 
        </div>

        <div className="card-group" id="cardGroup">

          <LocationCardBody CardTitle='Nathia Gali'
          imgLink='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Miranjani_from_Nathiagali.JPG/1280px-Miranjani_from_Nathiagali.JPG'
          ExploreLink = "https://goo.gl/maps/kk9M5rYGmcqQSdSb9"
          >
          </LocationCardBody>

          <LocationCardBody CardTitle='Naran Valley'
          imgLink='https://www.magtheweekly.com/assets/uploads/updates/2018-12-28/5227_6129952_updates.jpg'
          ExploreLink = "https://goo.gl/maps/WkeyAhUR3UUh9mXGA"
          >
          </LocationCardBody>
        </div>
      </section>
    );
  }
}

export default ExploreLocations;

import './Booking.css'
import Navbar from '../navbar/Navbar';
import Searchroom from '../searchroom/Searchroom.js';
import SearchResult from '../searchresult/SearchResult';
import Footer from "../Footer/Footer"

const Booking = () =>
{
    return(
        <div>
            <Navbar/>
            <Searchroom/>
            <SearchResult/>
            <Footer/>
        </div>
    );

}

export default Booking;
import './SearchResult.css'
import Review from "./LikeDislike"
import React from "react";
import axios from "axios";

const Card = (props) => {
    return (
        <div className="card shadow mb-3" id="CardLayout"
        data-aos="fade" data-aos-duration={700} data-aos-delay={50}
        >

            <div data-bs-toggle="modal" data-bs-target="#cartModal" data-bs-whatever="Cart">

                <img className="card-img-top " src={props.element.image} alt="Card image cap" style={{width: "710px", height: "300px"}}></img>
                <div className="card-body">
                    <h5 className="card-title " id="CardTitleCSS">{props.element.title}</h5>
                    <p className="card-text">{props.element.text}</p>
                    <span className="Pricetag">{props.element.price}</span>
                </div>

            </div>

            <Review like={props.element.like} dislike={props.element.dislike}/>

        </div>
    );
}

class SearchResult extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardList1: [],

            cardList2: [],
            
            cardList3: [],

            pageNumber: localStorage.getItem("pageNum")
        }

        if (localStorage.getItem("s_run"))
        {
            this.RunSearch()
        }
        else
        {
            localStorage.removeItem("s_loc")
            localStorage.removeItem("s_cin")
            localStorage.removeItem("s_cout")
            localStorage.removeItem("s_rooms")
            localStorage.removeItem("s_pmin")
            localStorage.removeItem("s_pmax")

            console.log(this.state.pageNumber)
            this.GetAllRoomsPage()
        }

    }


    setPageNum = (pagen) => {
        this.setState(state => ({
            pageNumber: pagen
        }))
        localStorage.setItem("pageNum", pagen)
        window.location = "/SearchRooms";
    }

    RunSearch = async () => {
        try {
            const url = "http://localhost:3000/rooms/search";
            const data = {
                location: localStorage.getItem("s_loc"),
                checkin: localStorage.getItem("s_cin"),
                checkout: localStorage.getItem("s_cout"),
                rooms: localStorage.getItem("s_rooms"),
                priceMin: localStorage.getItem("s_pmin"),
                priceMax: localStorage.getItem("s_pmax")
            }

            const { data: res } = await axios.post(url, data);
            console.log(res.rooms)

            this.cardList1 = []
            this.cardList2 = []
            this.cardList3 = []

            this.SetCardLists(res.rooms)
            localStorage.removeItem("s_run")


        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                console.log(error.response.data.message);
            }
        }
    };

    
    GetAllRooms = async () => {
        try {
            const url = "http://localhost:3000/rooms/get_all_rooms";
            const data = {}
            const { data: res } = await axios.get(url, data);

            this.cardList1 = []
            this.cardList2 = []
            this.cardList3 = []

            this.SetCardLists(res.rooms)

        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                console.log(error.response.data.message);
            }
        }
    };


    GetAllRoomsPage = async () => {
        try {
            const url = "http://localhost:3000/rooms/get_all_rooms_page";
            const data = {
                page: this.state.pageNumber
            }
            const { data: res } = await axios.post(url, data);

            this.cardList1 = []
            this.cardList2 = []
            this.cardList3 = []

            this.SetCardLists(res.rooms)

        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                console.log(error.response.data.message);
            }
        }
    };

    SetCardLists = async (rooms) => {
        let curr = 1
        for (let i = 0; i < rooms.length; i++) {
            const tempRoom = {
                "image": rooms[i].imgurl,
                "title": rooms[i].hotelName,
                "text": rooms[i].description,
                "price": "PKR " + rooms[i].price.toString() + "/-",
                "like": rooms[i].like.toString(),
                "dislike": rooms[i].dislike.toString(),
            };

            if (curr == 1) {
                this.setState(state => ({
                    cardList1: [...state.cardList1, tempRoom]
                }))
                curr = 2
            }

            else if (curr == 2) {
                this.setState(state => ({
                    cardList2: [...state.cardList2, tempRoom]
                }))
                curr = 3
            }

            else {
                this.setState(state => ({
                    cardList3: [...state.cardList3, tempRoom]
                }))
                curr = 1
            }
        }
    };
    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {this.state.cardList1.map(CardElement => (<Card element={CardElement} />))}
                    </div>
                    <div className="col">
                        {this.state.cardList2.map(CardElement => (<Card element={CardElement} />))}
                    </div>
                    <div className="col">
                        {this.state.cardList3.map(CardElement => (<Card element={CardElement} />))}
                    </div>
                </div>

                <form>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" tabindex="-1">Previous</a>
                        </li>
                            <li className="page-item"><button type="button" value="1" onClick={(e) => this.setPageNum(e.currentTarget.value)} className="page-link" href="#">1</button></li>
                            <li className="page-item"><button type="button" value="2" onClick={(e) => this.setPageNum(e.currentTarget.value)} className="page-link" href="#">2</button></li>
                            <li className="page-item"><button type="button" value="3" onClick={(e) => this.setPageNum(e.currentTarget.value)} className="page-link" href="#">3</button></li>
                            <li className="page-item"><button type="button" value="4" onClick={(e) => this.setPageNum(e.currentTarget.value)} className="page-link" href="#">4</button></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                    </nav>
                </form>

            </div>
        );
    }
}

export default SearchResult;
import axios from 'axios'
import React from 'react';

export default class AccountActivation extends React.Component{
    constructor(props) {
        super(props);

    }
 
    PostData = async (event) => {
        try {
            let search= window.location.search
            let params= new URLSearchParams(search)
            let foo= params.get('token')

            const url = "http://localhost:3000/users/activate_account";
            const data = {
                token: foo
            }
            const { data: res } = await axios.post(url, data);
            console.log(res.data)
            window.location="/SearchRooms"
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
        return(
        <div>
            {this.PostData()}
        {/* <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={this.PostData()}> Activate Account</button> */}
        </div>
        );
    }

}


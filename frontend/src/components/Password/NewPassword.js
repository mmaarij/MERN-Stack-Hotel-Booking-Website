import { useState, useContext } from 'react'
import axios from 'axios'


const NewPassword = () => {

    const [password, setPasword] = useState("")
    const [confirmPassword, setConfirmPasword] = useState("")

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get('token');

    const PostData = async (event) => {
        try {
            const url = "http://localhost:3000/users/new_password";
            const data = {
                password: password,
                token: foo
            }
            console.log(data.token)
            const { data: res } = await axios.post(url, data);
            console.log(res.data)
            window.location("/")
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
    return (
        
        <div id = "body">
            <main class=" container .setPassword">
            <form>
                <h1 class="d-flex justify-content-center h3 mb-3 fw-normal">SERENITY</h1>
                <div class="form-floating">
                <input type="Password" class="form-control" id="floatingPassword" value={password} onChange={(e)=>setPasword(e.target.value)}/>
                <label for="floatingPassword">New Password</label>
                </div>

                <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" onChange={(e)=>setConfirmPasword(e.target.value)}/>
                <label for="floatingPassword">Confirm Password</label>
                </div>

                {password && password === confirmPassword ?
                    <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={PostData}> Update Password</button> :
                <div/>
                }
            </form>
            </main>
      </div>
    );

}

export default NewPassword;
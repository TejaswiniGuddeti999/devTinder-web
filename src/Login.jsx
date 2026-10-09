import {useState} from 'react'
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router"
import { BASE_URL } from "./utils/constants"

export const Login = () => {

    const [emailId, setEmailId] = useState("vidheeshpoondru@gmail.com");
    const [password, setPassword] = useState("#Hanvik@15");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = async () => {
      try {
          const res = await axios.post(BASE_URL +"/login", 
          {emailId,password},
          {withCredentials: true},
        );
        console.log(res.data)
        dispatch(addUser(res.data));
        return navigate("/");

      }
      catch (err) {
        console.error(err);
      }
    }

  return (
    <div className = "flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">Login</h2>
        <div>
          <fieldset className="fieldset">
            <label className="label" htmlFor="name">Email ID</label>
            <input type="text" 
            value = {emailId} id="name" 
            className="input" 
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Email ID" />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label" htmlFor="password">Password</label>
            <input type="password"
             value= {password}
              id="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Password" />
          </fieldset>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handleLogin} >Login</button>
        </div>
      </div>
      </div>
    </div>
  )
}

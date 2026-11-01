import {useState} from 'react'
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router"
import { BASE_URL } from "../utils/constants"

export const Login = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoginForm, setIsLoginForm] = useState(false);


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
        setError(err?.response?.data || "Something went wrong")
        // console.error(err);
      }
    }

    const handleSignup = async() => {
      try{
        const res = await axios.post(BASE_URL + "/signup" , 
          {firstName, lastName, emailId, password},
          {withCredentials:true})
        dispatch(addUser(res.data.data));
        return navigate("/profile");
      }
      catch(err){
      if (err.response?.status === 409) {
          setIsLoginForm(true);          // switch the form to Login
          setPassword("");               // clear the password they typed
          setError("This email is already registered. Please log in.");
    } else {
      setError(err?.response?.data || "Something went wrong");
    }
    }};

  return (
    <div className = "flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title justify-center">{isLoginForm ? "Login" : "Signup"}</h2>
        <div>
          {!isLoginForm &&(
            <>
            <fieldset className="fieldset">
            <label className="label" htmlFor="firstname">First Name</label>
            <input type="text" 
            value = {firstName} id="firstname" 
            className="input" 
            onChange={(e) => setFirstName(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label" htmlFor="lastname">Last Name</label>
            <input type="text" 
            value = {lastName} id="lastname" 
            className="input" 
            onChange={(e) => setLastName(e.target.value)}
            />
          </fieldset>
          </>
           )}                 
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
        <p className = "text-red-500">{error}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignup} >
            {isLoginForm? "Login": "Sign Up"}
          </button>
        </div>
        <p className="m-auto cursor-pointer" onClick={()=>setIsLoginForm((value) => !value)}>
          {isLoginForm
            ? "New User? Signup Here"
            : "Existing User? Login Here"
          }
        </p>
      </div>
      </div>
    </div>
  )
}

export default Login;
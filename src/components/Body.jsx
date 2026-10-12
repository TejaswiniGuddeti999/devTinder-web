import React from 'react'
import {Outlet, useNavigate} from "react-router" ;
import NavBar from "./NavBar";
import {Footer} from "./Footer"
import axios from "axios"
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";  
import { addUser } from "../utils/userSlice";
import {useEffect} from "react"


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {

    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials : true,
            });
      dispatch(addUser(res.data));
    }
    catch(err) {
      if(err.status === 401){
        navigate("/login");
      }
      console.error(err);
    }
  };

  // whenever a component load, whatevr is written inside useEffect will be 
  // loaded first
  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
    
  }, []);
 
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />

    </div>

  );
};
export default Body;
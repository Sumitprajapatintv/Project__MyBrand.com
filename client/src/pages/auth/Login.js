import React, {useState} from 'react'
import toast from 'react-hot-toast';
import Layout from '../../components/Layout/Layout'
import {useNavigate} from "react-router-dom"
import "../../styles/AuthStyles.css"
import { useAuth } from '../../context/auth';
import axious from "axios";

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[auth,setAuth]=useAuth();

    const nevigate=useNavigate();

    const handleSubmit=async (e)=>{
         e.preventDefault();
         try{
            const res= await axious.post('/api/v1/auth/Login',{email,password}
            );
            if(res.data.success)
            {
                toast.success(res.data.message);
                 setAuth(
                  {
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                  }
                 );
                 localStorage.setItem("auth",JSON.stringify(res.data));
                nevigate('/');
            }
              

         }catch(error)
         {
            console.log(error);
            toast.error("Somthing Went Wrong");
         }
    }
  return (
    <Layout title="Login - Ecommer App">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN</h4>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
    
          
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default Login

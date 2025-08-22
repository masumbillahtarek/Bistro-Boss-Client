import useTitle from "../customHook/useTitle";
import authentication from '../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Login = () => {
    const{signIn}=useContext(AuthContext)
    
    useTitle('Bistro | Login')
    const[disabled,setDisabled]=useState(true)
//    const captchaRef=useRef(null)
     useEffect(()=>{
             loadCaptchaEnginge(6); 
        },[])
        const navigate=useNavigate()
        const location=useLocation()
        const from=location.state?.from?.pathname ||"/";
    const handleLogin=(e)=>{
       
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        signIn(email,password)
         .then((result) => {
    const user = result.user;
console.log(user)
navigate(from,{replace:true})
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });

    }
    const handleValidateCaptcha=(e)=>{
   const user_captcha_value=e.target.value
   console.log(user_captcha_value)
    if (validateCaptcha(user_captcha_value)) {
           setDisabled(false)
       }
    }
    return (
        <div>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2">
      <img src={authentication} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-2xl text-black text-center pt-6">Please Login Your Account</h3>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password"  className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
            <div className="form-control">
          <label className="label">
        <LoadCanvasTemplate />
          </label>
          <input onBlur={handleValidateCaptcha} type="text" placeholder="Type the captcha above" name="captcha"  className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button disabled={disabled} className="btn bg-[#D1A054B2] text-white w-full">Login</button>
        </div>
      </form>
    <h3 className="text-center text-xl pb-6">New Here.Please <Link className="text-cyan-600" to="/register">create an account</Link></h3>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
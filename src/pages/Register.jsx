import useTitle from "../customHook/useTitle";
import authentication from '../assets/others/authentication2.png'
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const{createUser,updateUserProfile}=useContext(AuthContext)
     useTitle('Bistro | Register')
     const navigate=useNavigate()
     const handleRegister=(e)=>{
       
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password,photo)
      createUser(email,password)
    .then((result) => {
    const user =result.user;
 console.log(user)
 updateUserProfile(name,photo)
 .then(() => {
  console.log(' Profile updated!')
  navigate('/')
}).catch((error) => {
 console.log('  An error occurred',error)
});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   console.log(errorCode,errorMessage)
  });
    }
    return (
         <div>
                  <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="w-1/2">
              <img src={authentication} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h3 className="text-2xl text-black text-center pt-6">Please Sign Up Your Account</h3>
              <form onSubmit={handleRegister} className="card-body">
                 <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                  <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo UrL</span>
                  </label>
                  <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
                </div>
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
                  
                </div>
               
                <div className="form-control mt-6">
                  <button  className="btn bg-[#D1A054B2] text-white w-full">Sign Up</button>
                </div>
              </form>
            <h2 className="text-xl text-center pb-6">Already Have An Account ? Please <Link className="text-cyan-600" to="/login">Login Your Account</Link></h2>
            </div>
          </div>
        </div>
                </div>
    );
};

export default Register;
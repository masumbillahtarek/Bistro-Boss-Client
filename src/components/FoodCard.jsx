import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

import useAxiosSecure from "../customHook/useAxiosSecure";
import useCart from "../customHook/useCart";


const FoodCard = ({item}) => {
  const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  const location=useLocation()
  const axiosSecure=useAxiosSecure()
  const[,refetch]=useCart()
    const {_id,name,image,price,recipe}=item
    const handleAddToCart=(food)=>{
     if(user && user.email){
       console.log(food)
       const cartItem={
        menuId:_id,
        email:user.email,
        name,image,price
       }
       axiosSecure.post('/carts',cartItem)
       .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
  position: "center",
  icon: "success",
  title: `${name} SuccessFully Added The Cart`,
  showConfirmButton: false,
  timer: 2000
});
//refetch the cart to update the cart items count
refetch()
        }
       })
     }else{
      Swal.fire({
  title: "Are you sure?",
  text: "You Have No User.Please Login",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Login!"
}).then((result) => {
  if (result.isConfirmed) {
 navigate('/login',{state:{from:location}})
  }
});
     }
    }
    return (
        <div>
<div className="card bg-base-100 w-96 h-[420px] shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" className="h-56 w-full"/>
      <p className="text-2xl text-white bg-black w-24 absolute top-4 right-4 text-center rounded-xl">${price}</p>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions w-32 mx-auto">
      <button onClick={()=>handleAddToCart(item)} className='flex-grow text-black  mx-auto border-black  border-b-4 rounded-xl px-4 py-2 hover:bg-black hover:text-white'>Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;
 
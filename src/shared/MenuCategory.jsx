import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./menuItem";


const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div>
            {title&& <Cover img={coverImg} title={title}></Cover> }
             <div className="grid gap-10 grid-cols-2 my-16">
                {
                items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
         
            <Link className="flex justify-center my-6" to={`/order/${title}`} >    <button className='text-black border-black w-1/6 border-b-4 rounded-xl px-4 py-2 hover:bg-black hover:text-white'>Order Now</button></Link>
         </div>
   
    );
};

export default MenuCategory;
//
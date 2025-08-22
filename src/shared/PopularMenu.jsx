import SectionTitle from "../components/SectionTitle";
import { useEffect, useState } from "react";
import MenuItem from "./menuItem";
import useMenu from "../customHook/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu()
     const popularItems=menu.filter(item=>item.category==='popular')
//        const[menu,setMenu]=useState([])
//    useEffect(()=>{
//        fetch('menu.json')
//        .then(res=>res.json())
//        .then(data=>{
//            const popularItems=data.filter(item=>item.category==='popular')
//            setMenu(popularItems)
//        })
//    },[])
    console.log(menu)
    return (
        <div>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>
            <div className="grid gap-10 grid-cols-2 my-10">
                {
popularItems.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
           <div className="flex justify-center my-6">
             <button className="py-2 px-4 border-b-4 rounded-xl border-black hover:bg-black hover:text-white">View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;
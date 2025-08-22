import React from 'react';
import SectionTitle from '../components/SectionTitle';
import bg1 from '../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='bg-image p-20 rounded-xl text-white bg-fixed  my-6'>
            <SectionTitle heading={'Check it out'} subHeading={'FROM OUR MENU'}></SectionTitle>
            <div className='flex items-center gap-12 my-6 bg-opacity-20'>
                <img className='w-80' src={bg1} alt="" />
                <div className='flex flex-col gap-2 '>
                    <h4 className='text-2xl'>March 20, 2023</h4>
                    <h2 className='text-2xl'>WHERE CAN I GET SOME?</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className='text-white w-1/6 border-b-4 rounded-xl px-4 py-2 hover:bg-black hover:text-white'>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
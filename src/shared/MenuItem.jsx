


const MenuItem = ({item}) => {
    const{name,recipe,image,price}=item
    return (
        <div className='flex items-center gap-12'>
           <div><img style={{borderRadius:'0px 200px 200px 200px',width:'120px'}} src={image} alt="" /></div>
           <div>
            <div className='flex justify-between items-center'>
                <div className="text-2xl">{name}------</div>
                <div className="text-xl text-[#BB8506]">${price}</div>
            </div>
            <h3 className="text-xl">{recipe}</h3>
           </div>
        </div>
    );
};

export default MenuItem;
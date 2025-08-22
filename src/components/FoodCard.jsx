

const FoodCard = ({item}) => {
    const {name,image,price,recipe}=item
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
      <button className='flex-grow text-black  mx-auto border-black  border-b-4 rounded-xl px-4 py-2 hover:bg-black hover:text-white'>Add To Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodCard;
 
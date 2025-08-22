import useTitle from "../customHook/useTitle";
import Cover from "../shared/Cover";
import menuBg from "../assets/menu/banner3.jpg"
import useMenu from "../customHook/useMenu";
import SectionTitle from "../components/SectionTitle";
import PopularMenu from "../shared/PopularMenu";
import MenuCategory from "../shared/MenuCategory";
import desertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
const Menu = () => {
    useTitle('Bistro | Menu')
    const[menu]=useMenu()
     const dessert=menu.filter(item=>item.category==='dessert')
  const pizza=menu.filter(item=>item.category==='pizza')
   const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
     const offered=menu.filter(item=>item.category==='offered')
    
    return (
        <div>
      <Cover img={menuBg} title={'OUR MENU'}></Cover>   <br /> <br />
    <SectionTitle subHeading={"Don't Miss "} heading={"Todays Offer"} ></SectionTitle>
   <MenuCategory items={offered}></MenuCategory>
  <MenuCategory
  items={dessert} title={'dessert'} coverImg={desertImg}
  ></MenuCategory>
  <MenuCategory
  items={pizza} title={'pizza'} coverImg={pizzaImg}
  ></MenuCategory>
  <MenuCategory
  items={salad} title={'salad'} coverImg={saladImg}
  ></MenuCategory>
  <MenuCategory
  items={soup} title={'soup'} coverImg={soupImg}
  ></MenuCategory>
        </div>
    );
};

export default Menu;
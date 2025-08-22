import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useTitle from '../customHook/useTitle';
import Cover from '../shared/Cover';
import orderImg from '../assets/shop/banner2.jpg'
import { useState } from 'react';
import useMenu from '../customHook/useMenu';
//import FoodCard from '../components/FoodCard';
import OrderTab from '../components/OrderTab';
import { useParams } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
const Order = () => {
  const categories=['salad','pizza','soup','dessert','drinks']
  const{category}=useParams()
  const initialIndex=categories.indexOf(category)
 // const[tabIndex,setTabIndex]=useState(0)
  const[tabIndex,setTabIndex]=useState(initialIndex)
  const[menu]=useMenu()
    useTitle('Bistro | Order')
     console.log(category)
     const dessert=menu.filter(item=>item.category==='dessert')
  const pizza=menu.filter(item=>item.category==='pizza')
   const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
     const drinks=menu.filter(item=>item.category==='drinks')
    return (
        <div>
           <Cover img={orderImg} title={'Order Food'}></Cover> 
             <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
  <OrderTab item={salad}></OrderTab>
    </TabPanel>
    <TabPanel>
      <OrderTab item={pizza}></OrderTab>
    </TabPanel>
     <TabPanel>
       <OrderTab item={soup}></OrderTab>
    </TabPanel>
    <TabPanel>
   <OrderTab item={dessert}></OrderTab>
    </TabPanel>
     <TabPanel>
        <OrderTab item={drinks}></OrderTab>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Order;

import Banner from "../shared/Banner";
import Category from "../shared/Category";
import Contact from "../shared/Contact";
import Featured from "../shared/Featured";
import PopularMenu from "../shared/PopularMenu";
import Testimonials from "../shared/Testimonials";
import useTitle from '../customHook/useTitle';


const Home = () => {
  useTitle('Bistro | Home')
    return (
        <div>
          
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Contact></Contact>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
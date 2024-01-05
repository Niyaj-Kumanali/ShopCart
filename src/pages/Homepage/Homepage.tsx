import Deals from '../Deals/Deals';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <h2 style={{ margin: '40px 20px 20px' }}>Todays Best Deals For You</h2>
      <Deals />
      <Footer />
    </div>
  );
};

export default Homepage;

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStoreData } from './store/data';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TopBar from './components/TopBar/TopBar';

import './App.css';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import BottomFooter from './components/BottomFooter/BottomFooter';
import GiftPop from './components/GiftPop/GiftPop';

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [pop, setPop] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/')
      .then((response) => {
        const fetchedData = response.data.products;
        const products = [];
        for (let i = 0; i < fetchedData.length; i++) {
          fetchedData[i].quantity = 1;
          products.push(fetchedData[i]);
        }
        dispatch(setStoreData(products));
        setIsLoading(true);
        console.log(products);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  // useEffect(() => {
  //   console.log('Updated Data:', data);
  // }, [data]);

  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="App" onClick={()=>{setPop(false)}}>
        {!isLoading ? <div className="loader">Loading...</div> : <Outlet />}
      </div>
      <BottomFooter setPop={setPop}/>
      <BackToTopButton />
      <GiftPop pop={pop} setPop={setPop}/>
    </div>
  );
};

export default App;

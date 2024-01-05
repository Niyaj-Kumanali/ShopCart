import { useDispatch, useSelector } from 'react-redux';
import './Deals.css';
import { useState, useEffect } from 'react';
import Deal from '../../components/Deal/Deal';
import { setStoreData } from '../../store/data';

const Deals = () => {
  const allDeals = useSelector((state: any) => state.data);
  const searchItems = useSelector((state: any) => state.searchItems);
  // const cart = useSelector((state: any) => state.cart);
  const [deals, setDeals] = useState(allDeals);

  const categories = useSelector((state: any) => state.categories);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCategory === 'All') {
      setDeals(allDeals);
    } else {
      const filteredDeals = allDeals.filter(
        (deal: { category: string }) => deal.category === selectedCategory
      );
      setDeals(filteredDeals);
    }
  }, [selectedCategory, allDeals]);

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSort = (sort = 'name') => {
    let sortedDeals = [];
    switch (sort) {
      case 'priceDsc':
        sortedDeals = allDeals.sort(
          (a: { price: number }, b: { price: number }) => b.price - a.price
        );

        break;
      case 'priceAsc':
        sortedDeals = allDeals.sort(
          (a: { price: number }, b: { price: number }) => a.price - b.price
        );

        break;
      case 'rating':
        sortedDeals = allDeals.sort(
          (a: { rating: number }, b: { rating: number }) => b.rating - a.rating
        );

        break;
      case 'name':
        sortedDeals = allDeals.sort(
          (a: { title: string }, b: { title: string }) =>
            a.title.localeCompare(b.title)
        );

        break;
      default:
        sortedDeals = allDeals;
        break;
    }

    dispatch(setStoreData(sortedDeals));
  };

  return (
    <div className="deals-container">
      <div className="deals-navbar">
        <div className="deals-bar">
          <button
            onClick={() => handleCategory('All')}
            className={selectedCategory === 'All' ? 'active' : ''}
          >
            All Items
          </button>
          {categories.map((category: string, index: number) => (
            <button
              onClick={() => handleCategory(category)}
              key={index}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>
        <select
          name="sortBy"
          id="sortBy"
          onClick={(e) => {
            handleSort((e.target as HTMLSelectElement).value);
          }}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="priceAsc">Price(Asc)</option>
          <option value="priceDsc">Price(Dsc)</option>
        </select>
      </div>
      <div className="deals">
        {searchItems.length !== 0
          ? deals.map(
              (deal: any, index: number) =>
                searchItems.includes(deal) && <Deal key={index} deal={deal} />
            )
          : deals.map((deal: any, index: number) => (
              <Deal key={index} deal={deal} />
            ))}
      </div>
    </div>
  );
};

export default Deals;

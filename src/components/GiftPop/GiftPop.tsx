import './GiftPop.css';

const GiftPop = ({ pop, setPop }:{pop: boolean, setPop: any}) => {
  return pop && <div className="gift-pop">No Gifts Available
  
  <button onClick={()=> setPop((prev: boolean) => !prev)} className="cross">X</button>
  </div>;
};

export default GiftPop;

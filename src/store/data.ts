import { createStore } from 'redux';

const initialState: {
  data: any[];
  categories: string[];
  cart: any[];
  wishlist: any[];
  searchItems: any[];
  searchTerms: string[];
} = {
  data: [],
  categories: [],
  cart: [],
  wishlist: [],
  searchItems: [],
  searchTerms: [],
};

//actions
export const setStoreData = (data: any[]) => {
  return {
    type: 'SET_DATA',
    data,
  };
};

export const setSearchItems = (data: any[]) => {
  return {
    type: 'SET_SEARCH_RESULTS',
    data,
  };
};
export const setStoreSearchTerms = (data: string) => {
  return {
    type: 'SET_SEARCH_TERMS',
    data,
  };
};

export const setStoreCategories = (data: any) => {
  return {
    type: 'SET_CATEGORIES',
    data,
  };
};

export const setStoreCart = (data: any) => {
  return {
    type: 'SET_CART',
    data,
  };
};

export const removeFromCart = (id: any) => {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
};

export const setStoreCount = (deal: any, quantity: number) => {
  return {
    type: 'SET_COUNT',
    deal,
    quantity,
  };
};

export const addToWishlist = (data: any) => {
  return {
    type: 'ADD_TO_WISHLIST',
    data,
  };
};

export const removeFromWishlist = (id: any) => {
  return {
    type: 'REMOVE_FROM_WISHLIST',
    id,
  };
};
const dataReducer = (
  state = initialState,
  action: { type: any; data: any; id: any; deal: { id: any }; quantity: any }
) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: [...action.data],
      };
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: [...action.data],
      };

    case 'SET_CART':
      return {
        ...state,
        cart: !state.cart.includes(action.data)
          ? [...state.cart, action.data]
          : [...state.cart],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item: any) => item.id !== action.id),
      };

    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlist: [...state.wishlist, action.data],
      };

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.id),
      };

    case 'SET_COUNT':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.deal.id
            ? { ...action.deal, quantity: action.quantity }
            : item
        ),
      };

    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchItems: action.data,
      };
    case 'SET_SEARCH_TERMS':
      return {
        ...state,
        searchTerms: !state.searchTerms.includes(action.data) && action.data != '' ? state.searchTerms.length < 5 ? [action.data, ...state.searchTerms] : [action.data, ...state.searchTerms.slice(0, 5)] : state.searchTerms
      };
    default:
      return state;
  }
};

const dataStore = createStore(dataReducer);

export default dataStore;

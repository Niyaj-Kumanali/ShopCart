import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './pages/Homepage/Homepage';
import Deals from './pages/Deals/Deals';
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';
import Account from './pages/Account/Account';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import PrivacyAndPolicy from './pages/PrivacyAndPolicy/PrivacyAndPolicy';
import BecomeASeller from './pages/BecomeASeller/BecomeASeller';
import Delivery from './pages/Delivery/Delivery';
import DealDetails from './pages/DealDetails/DealDetails';
const aboutUs = [
  'Shopcart Help',
  'Returns',
  'Track Orders',
  'Contact Us',
  'Feedback',
  'Security',
];

const services = [
  'Gift Cart',
  'Mobile App',
  'Shopping & Delivery',
  'Order Pickup',
  'Account Signup',
];

const department = [
  'Shopcart Help',
  'Returns',
  'Track Orders',
  'Contact Us',
  'Feedback',
  'Security',
];

const ServicesRoutes = services.map((service, index) => {
  return {
    path: `/services/${service}`,
    element: <div className='footer-link'><h3>{service}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi odit sunt iusto quo quia voluptatem perspiciatis voluptatum totam maiores laudantium libero facilis fuga dolorum quas quos. Maxime veritatis, eligendi natus ipsa eum non corporis, impedit temporibus quod error adipisci voluptas a voluptates fuga eos atque optio iusto maiores, velit suscipit facilis harum numquam iure. Facilis laboriosam perferendis, harum est atque labore ipsam sint? Alias voluptates ea sequi, fugit veritatis tempore magnam omnis, excepturi nulla eos illum voluptatibus nesciunt, tenetur eius minus magni? Perferendis dolorum sunt facilis assumenda eum dolor tempora quasi ipsum! Rerum debitis quasi vero earum, quos maxime.</p></div>,

  };
});
const AboutUsRoutes = aboutUs.map((about, index) => {
  return {
    path: `/aboutUs/${about}`,
    element: <div className='footer-link'><h3>{about}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi odit sunt iusto quo quia voluptatem perspiciatis voluptatum totam maiores laudantium libero facilis fuga dolorum quas quos. Maxime veritatis, eligendi natus ipsa eum non corporis, impedit temporibus quod error adipisci voluptas a voluptates fuga eos atque optio iusto maiores, velit suscipit facilis harum numquam iure. Facilis laboriosam perferendis, harum est atque labore ipsam sint? Alias voluptates ea sequi, fugit veritatis tempore magnam omnis, excepturi nulla eos illum voluptatibus nesciunt, tenetur eius minus magni? Perferendis dolorum sunt facilis assumenda eum dolor tempora quasi ipsum! Rerum debitis quasi vero earum, quos maxime.</p></div>,
  };
});
const DepartmentRoutes = department.map((dept, index) => {
  return {
    path: `/department/${dept}`,
    element: <div className='footer-link'><h3>{dept}</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, commodi odit sunt iusto quo quia voluptatem perspiciatis voluptatum totam maiores laudantium libero facilis fuga dolorum quas quos. Maxime veritatis, eligendi natus ipsa eum non corporis, impedit temporibus quod error adipisci voluptas a voluptates fuga eos atque optio iusto maiores, velit suscipit facilis harum numquam iure. Facilis laboriosam perferendis, harum est atque labore ipsam sint? Alias voluptates ea sequi, fugit veritatis tempore magnam omnis, excepturi nulla eos illum voluptatibus nesciunt, tenetur eius minus magni? Perferendis dolorum sunt facilis assumenda eum dolor tempora quasi ipsum! Rerum debitis quasi vero earum, quos maxime.</p></div>,
  };
});

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/Deals',
        element: <Deals />,
      },

      {
        path: '/Wishlist',
        element: <Wishlist />,
      },
      {
        path: '/Delivery',
        element: <Delivery />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/terms-and-conditions',
        element: <TermsAndConditions />,
      },
      {
        path: '/Privacy-and-Policy',
        element: <PrivacyAndPolicy />,
      },

      {
        path: '/become-a-seller',
        element: <BecomeASeller />,
      },

      {
        path: '/help',
        element: <div className="footer-link"><h3>Help Center</h3><p>Sorry I can't help you</p></div>,
      },
      {
        path: '/deal-details',
        element: <DealDetails />,
      },
      ...ServicesRoutes,
      ...DepartmentRoutes,
      ...AboutUsRoutes,
    ],
  },

  {
    path: '*',
    element: <h1>404</h1>,
  },
]);

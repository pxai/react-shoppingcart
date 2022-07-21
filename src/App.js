import Home from './routes/home/Home';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/Authentication';
import Navigation from './routes/navigation/Navigation';
import Checkout from './routes/checkout/checkout.component';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
          <Route index element={<Home/>} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
};

export default App;

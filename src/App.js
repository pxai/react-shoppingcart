import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';
import SignIn from './routes/sign-in/SignIn';
import Navigation from './routes/navigation/Navigation';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
          <Route index element={<Home/>} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;

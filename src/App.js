import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Chocolates from './routes/chocolates/chocolates.component';
import Candys from './routes/candys/candys.component';
import Gifts from './routes/gifts/gifts.components';
import Authentification from './routes/authentification/authentification.component';
import Checkout from './routes/checkout/checkout.component';
import ProductPage from './routes/product-page/product-page.component';
import CandyPage from './routes/candy-page/candy-page.component';

import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })
    return unsubscribe;
  }, [dispatch])


  return (

    <Routes>
      <Route path="/" element={<Navigation />}>

        <Route index element={<Home />} />
        <Route path='chocolates/*' element={<Chocolates />} />
        <Route path='candys/*' element={<Candys />} />
        <Route path='gifts/*' element={<Gifts />} />
        <Route path='auth' element={<Authentification />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='/*' element={<ProductPage />} />
        <Route path='cndy/*' element={<CandyPage />} />

      </Route>
    </Routes>

  );
}

export default App;

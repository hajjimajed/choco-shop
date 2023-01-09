import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Chocolates from './routes/chocolates/chocolates.component';
import Candys from './routes/candys/candys.component';
import Gifts from './routes/gifts/gifts.components';
import Authentification from './routes/authentification/authentification.component';


const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigation />}>

        <Route index element={<Home />} />
        <Route path='chocolates' element={<Chocolates />} />
        <Route path='candys' element={<Candys />} />
        <Route path='gifts' element={<Gifts />} />
        <Route path='auth' element={<Authentification />} />

      </Route>
    </Routes>

  );
}

export default App;

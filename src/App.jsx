import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppLayout from './Components/Layouts/AppLayouts';
import Home from './Components/Home';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import NotFound from './Errors/NotFound';
import CurrencyProvider from './Contexts/CurrencyContext';
import Checkout from './Components/Checkout';

const App = () => {
  const productsList = useSelector(state => state.products.productsList);

  return (
    <Router>
      <AppLayout>
        <CurrencyProvider>
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} products={productsList} />} />
            <Route exact path="/checkout" render={(props) => <Checkout {...props} />} />
            <Route exact path="/login" render={(props) => <Login {...props} products={productsList} />} />
            <Route exact path="/register" render={(props) => <Register {...props} products={productsList} />} />
            <Route component={NotFound} />
          </Switch>
        </CurrencyProvider>
      </AppLayout>
    </Router>
  );
}

export default App;

import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Provider } from 'react-redux';
import store from './Store';
import SearchProvider from './Contexts/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SearchProvider>
      <App />
    </SearchProvider>
  </Provider>
)

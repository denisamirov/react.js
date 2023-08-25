import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
)


reportWebVitals();
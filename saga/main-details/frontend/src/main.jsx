import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter } from 'react-router-dom';
import cardsSlice from './store/cardsSlice.js'

import rootSaga from './saga/detailSaga.js'

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {cards: cardsSlice},
  middleware: [saga]
})

saga.run(rootSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)

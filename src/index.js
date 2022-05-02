import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
  <>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer
      closeOnClick={false}
      theme="light"
      autoClose={2000}
      pauseOnFocusLoss={false}
    />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)

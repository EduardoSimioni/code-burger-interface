import PropTypes from 'prop-types'
import React from 'react'

import { CartProvider } from './CartContext'
import { ModeProvider } from './ModeContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => (
  <UserProvider>
    <ModeProvider>
      <CartProvider>{children}</CartProvider>
    </ModeProvider>
  </UserProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider

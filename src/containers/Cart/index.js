import React from 'react'
import { ThemeProvider } from 'styled-components'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems, CartResume } from '../../components'
import { useMode } from '../../hooks/ModeContext'
import { lightTheme, darkTheme } from '../../styles/theme'
import { CartImg, Container, Wrapper } from './styles'

export function Cart() {
  const { mode } = useMode()
  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <Container>
        <CartImg src={CartLogo} alt="logo-do-carrinho" />
        <Wrapper>
          <CartItems />
          <CartResume />
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

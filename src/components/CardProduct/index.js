import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { useCart } from '../../hooks/CartContext'
import { useMode } from '../../hooks/ModeContext'
import { lightTheme, darkTheme } from '../../styles/theme'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'
export function CardProduct({ product, theme }) {
  const { putProductInCart } = useCart()
  const { push } = useHistory()
  const { mode } = useMode()
  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <Container>
        <Image src={product.url} alt="imagem do produto" />
        <div>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.formatedPrice}</ProductPrice>
          <Button
            onClick={() => {
              putProductInCart(product)
              push('/carrinho')
            }}
          >
            Adicionar
          </Button>
        </div>
      </Container>
    </ThemeProvider>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object,
  theme: PropTypes.string
}

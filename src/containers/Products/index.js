import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import ProductsLogo from '../../assets/products-logo.svg'
import { CardProduct } from '../../components'
import { useMode } from '../../hooks/ModeContext'
import api from '../../services/api'
import { lightTheme, darkTheme } from '../../styles/theme'
import formatCurrency from '../../utils/formatCurrency'
import {
  ProductsImg,
  Container,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './styles'
export function Products({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const { mode } = useMode()
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })

      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <Container>
        <ProductsImg src={ProductsLogo} alt="logo-da-home" />
        <CategoriesMenu>
          {categories &&
            categories.map(category => (
              <CategoryButton
                onClick={() => {
                  setActiveCategory(category.id)
                }}
                key={category.id}
                isActiveCategory={activeCategory === category.id}
              >
                {category.name}
              </CategoryButton>
            ))}
        </CategoriesMenu>
        <ProductsContainer>
          {filteredProducts &&
            filteredProducts.map(product => (
              <CardProduct key={product.id} product={product} />
            ))}
        </ProductsContainer>
      </Container>
    </ThemeProvider>
  )
}

Products.propTypes = {
  location: PropTypes.object
}

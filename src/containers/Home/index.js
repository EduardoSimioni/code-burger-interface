import React from 'react'
import { ThemeProvider } from 'styled-components'

import HomeLogo from '../../assets/home-logo.svg'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { useMode } from '../../hooks/ModeContext'
import { lightTheme, darkTheme } from '../../styles/theme'
import { HomeImg, Container } from './styles'

export function Home() {
  const { mode } = useMode()
  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <Container>
        <HomeImg src={HomeLogo} alt="logo-da-home" />
        <CategoryCarousel />
        <OffersCarousel />
      </Container>
    </ThemeProvider>
  )
}

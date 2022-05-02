import React from 'react'
import { useHistory } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Cart from '../../assets/cart.svg'
import People from '../../assets/person.svg'
import { useMode } from '../../hooks/ModeContext'
import { useUser } from '../../hooks/UserContext'
import { lightTheme, darkTheme } from '../../styles/theme'
import {
  Container,
  ContainerRight,
  ContainerLeft,
  PageLink,
  ContainerText,
  Line,
  PageLinkExit,
  ModeName
} from './styles'

export function Header() {
  const { mode, changeMode } = useMode()
  const { logout, userData } = useUser()
  // const { isDarkMode, setIsDarkMode } = useState()
  const {
    push,
    location: { pathname }
  } = useHistory()

  const logoutUser = () => {
    logout()
    push('/login')
  }

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <Container>
        <ContainerLeft>
          <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
            Home
          </PageLink>
          <PageLink
            onClick={() => push('/produtos')}
            isActive={pathname.includes('produtos')}
          >
            Ver produtos
          </PageLink>
        </ContainerLeft>

        <ContainerRight>
          <PageLink onClick={() => push('/carrinho')}>
            <img src={Cart} alt="carrinho" />
          </PageLink>
          <Line></Line>
          <PageLink>
            <img src={People} alt="logo-pessoa" />
          </PageLink>

          <ContainerText>
            <p>Olá, {userData.name}</p>
            <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
          </ContainerText>
          <div className="out-container">
            <ModeName>Modo noturno</ModeName>
            <div className="container-button">
              <label>
                <input onClick={changeMode} type="checkbox" />
                <span></span>
              </label>
            </div>
          </div>
        </ContainerRight>
      </Container>
    </ThemeProvider>
  )
}

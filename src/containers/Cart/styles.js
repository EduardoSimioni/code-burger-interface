import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.cartContainerColor};
  min-height: calc(100vh - 72px);
  padding-bottom: 50px;
`

export const CartImg = styled.img`
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`

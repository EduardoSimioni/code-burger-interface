import styled from 'styled-components'

export const Container = styled.div`
  height: 72px;
  background-color: #ffffff;
  background-color: ${props => props.theme.background1};
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;

  .out-container {
    width: 50px;
    display: flex;
    margin-right: 60px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .container-button {
    display: flex;
    justify-content: left;
    align-items: left;
    background: ${props => props.theme.background2};
    min-width: 50px;
    border-radius: 10px;
    height: 25px;
    border: 0.5px solid #1c1c1c;

    label {
      position: relative;
      width: 50;
      height: 25px;
      background: #212121;
      border-radius: 3px;
    }

    label input {
      appearance: none;
    }

    label span {
      position: absolute;
      top: 0;
      left: 0;
      right: 25px;
      width: 23px;
      height: 23px;
      background: #4f4f4f;
      border: 1px solid #212121;
      border-radius: 15px;
      cursor: pointer;
      transition: 0.5s;
    }

    label input:checked ~ span {
      left: 24px;
      background: #ffffff;
      transition: 0.5s;
    }
  }
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => (props.isActive ? '#9758A6' : '#c0c0c0')};
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: max-content;
`

export const ContainerText = styled.div`
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: ${props => (props.mode ? '#4f4f4f' : '#c0c0c0')};
  }
`

export const Line = styled.div`
  height: 40px;
  border: 0.5px solid ${props => (props.mode ? '#4f4f4f' : '#c0c0c0')};
`

export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #9758a6;
  cursor: pointer;
`
export const ModeName = styled.p`
  font-size: 16px;
  color: #c0c0c0;
  font-weight: 400;
`

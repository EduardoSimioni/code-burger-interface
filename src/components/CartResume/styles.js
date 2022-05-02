import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.cartProductBackground};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);

  p {
    color: ${props => props.theme.cartLetter};
  }

  h2 {
    color: ${props => props.theme.cartLetter};
  }

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'items items-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
    }

    .items {
      grid-area: items;
    }

    .items-price {
      grid-area: items-price;
    }

    .delivery-tax {
      grid-area: delivery-tax;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }
`

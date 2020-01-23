import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { flowRight } from 'lodash';

import CheckoutPage from './checkout.component';

const GET_CART_ITEMS_AND_TOTAL = gql`
  {
    cartTotal @client
    cartItems @client
  }
`;

const CheckoutPageContainer = ({ data: {cartItems, cartTotal}}) => {
  return (
    <CheckoutPage cartItems={cartItems} total={cartTotal} />
  );
};

export default flowRight(
  graphql(GET_CART_ITEMS_AND_TOTAL)
)(CheckoutPageContainer);

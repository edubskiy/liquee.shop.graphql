import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CheckoutItem from './checkout-item.component';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CheckoutItemContainer = props => (
  <Mutation mutation={ADD_ITEM_TO_CART}>
    {
      addItemToCart => <CheckoutItem {...props} addItem={item => addItemToCart({ variables: { item }})} />
    }
  </Mutation>
);

export default CheckoutItemContainer;

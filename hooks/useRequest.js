import { GraphQLClient, gql } from "graphql-request";

// const endpoint = "https://nutshell-server-api.herokuapp.com/";
const endpoint = "http://192.168.1.6:5005/";
export const client = new GraphQLClient(endpoint, { headers: {} });

export const DISHES_QUERY = gql`
  query {
    dishes {
      image
      name
      description
      price
      id
      type
    }
  }
`;

export const SINGLE_DISH_QUERY = gql`
  query ($dishId: ID!) {
    getDish(id: $dishId) {
      image
      name
      description
      price
    }
  }
`;

import gql from "graphql-tag";

export const FETCH_COLLECTIONS_QUERY = gql`
  query getCollections {
    getCollections {
      id
      body
      createdAt
      username
      recipes {
        id
        username
        createdAt
        body
      }
    }
  }
`;

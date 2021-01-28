import gql from "graphql-tag";

//Get all collections from database
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

//Create a collection for the database
export const CREATE_COLLECTION_MUTATION = gql`
  mutation createCollection($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      recipes {
        id
        body
        username
        createdAt
      }
    }
  }
`;

//Delete a collection from the database
export const DELETE_COLLECTION_MUTATION = gql`
  mutation deleteCollection($collectionId: ID!) {
    deleteCollection(collectionId: $collectionId)
  }
`;

//Add recipe to collection
export const ADD_RECIPE_MUTATION = gql`
  mutation addRecipe($collectionId: String!, $body: String!) {
    addRecipe(collectionId: $collectionId, body: $body) {
      id
      recipes {
        id
        body
        createdAt
        username
      }
    }
  }
`;

//Delete recipe from collection
export const DELETE_RECIPE_MUTATION = gql`
  mutation deleteRecipe($collectionId: String!, $recipeId: String!) {
    deleteRecipe(collectionId: $collectionId, recipeId: $recipeId) {
      id
      recipes {
        id
        username
        createdAt
        body
      }
    }
  }
`;

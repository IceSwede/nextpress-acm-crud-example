import { gql } from '@apollo/client';

export const GET_ALL_MYNOTES = gql`
  query AllMyNotes {
    mynotes(first: 10000) {
      edges {
        node {
          title
          name
          id
          details
          category
          sortingOrder
          publish
          date
          author {
            node {
              username
            }
          }
        }
      }
    }
  }
`;

export const GET_MYNOTE_BY_ID = gql`
  query MyNoteById($id: ID!) {
    mynote(id: $id) {
      title
      name
      id
      details
      category
      sortingOrder
      publish
      date
      author {
        node {
          username
        }
      }
    }
  }
`;

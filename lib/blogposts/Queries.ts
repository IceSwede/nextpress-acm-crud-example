import { gql } from '@apollo/client';

export const GET_ALL_BLOGPOSTS = gql`
  query AllBlogposts {
    blogposts(first: 100) {
      edges {
        node {
          id
          slug
          title
          date
          author {
            node {
              username
            }
          }
          name
        }
      }
    }
  }
`;

export const GET_BLOGPOSTS_PATHS = gql`
  query BlogpostPaths {
    blogposts(first: 100) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const GET_BLOGPOST_BY_SLUG = gql`
  query BlogpostBySlug($id: ID!, $idType: BlogpostIdType!) {
    blogpost(id: $id, idType: $idType) {
      id
      slug
      title
      date
      author {
        node {
          username
        }
      }
      name
      markdown
    }
  }
`;

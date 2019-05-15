import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    getTopstoryItems {
      id
      title
      type
      by
    }
  }
`;

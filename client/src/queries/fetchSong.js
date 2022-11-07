import { gql } from '@apollo/client';

export default gql`
query FetchSong($id: ID!) {
  song(id: $id) {			
    id
    title
    lyrics {
      id
      likes
      content
    }
  }
}
`;
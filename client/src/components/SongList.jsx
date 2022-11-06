import React from 'react';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query GetSongs {
    songs {
      title
      id
    }
  } 
`;
const SongList = () => {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data?.songs?.map(song => <li key={song.id}>{song.title}</li>);
};

export default SongList;
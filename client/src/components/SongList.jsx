import React from 'react';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query GetSongs {
    songs {
      title
    }
  } 
`;
const SongList = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log('data', data)
  return (
    <div>SongList</div>
  );
};

export default SongList;
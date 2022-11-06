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

  return (<>
    {loading && (<p>Loading...</p>)}
    {error && (<p>Error :(</p>)}
    {data?.songs?.map(song => (<li key={song.id} className="collection-item">{song.title}</li>))}
  </>)
};

export default SongList;
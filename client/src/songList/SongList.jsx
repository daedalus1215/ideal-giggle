import React from 'react';
import { useQuery } from '@apollo/client';
import { fetchSongs } from '../queries';
import { hashHistory } from 'react-router';
import SongItem from './SongItem';

const SongList = () => {
  const { loading, error, data } = useQuery(fetchSongs);
  const songs = data?.songs;

  return (<>
    {loading && (<p>Loading...</p>)}
    {error && (<p>Error :(</p>)}
    <ul>
      {songs && songs.map(({ id, title }) => (
        <SongItem key={id} id={id} title={title} />)
      )}
    </ul>

    <button
      onClick={() => { hashHistory.push("/song/new"); }}>
      <span><i className='fa fa-plus' />Add</span>
    </button>
  </>)
};

export default SongList;
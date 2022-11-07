import React from 'react';
import { useQuery } from '@apollo/client';
import { fetchSongs } from '../queries';
import { hashHistory } from 'react-router';
import SongItem from './SongItem';

const SongList = () => {
  const { loading, error, data } = useQuery(fetchSongs);

  return (<>
    {loading && (<p>Loading...</p>)}
    {error && (<p>Error :(</p>)}
    <ul>
      {data?.songs?.map(({ id, title }) => (<SongItem key={id} id={id} title={title} />))}
    </ul>
    <button to="/song/new" onClick={() => { hashHistory.push("/song/new"); window.location.reload() }}>
      <span><i className='fa fa-plus' />Add</span>
    </button>
  </>)
};

export default SongList;
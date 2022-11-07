import React from 'react';
import { useQuery } from '@apollo/client';
import { fetchSong } from '../queries';
import styles from './SongDetail.module.css';

const SongDetail = ({ params }) => {
    const { loading, error, data } = useQuery(fetchSong, { variables: { id: params.id } });
    const song = data?.song;

    return <div>
        <h3>
            SongDetail
        </h3>

        {loading && <div>Loading...</div>}
        {error && <div>Error...</div>}

        {song && (<div className={styles.container}>
            <div>id: {song.id}</div>
            <div>title: {song.title}</div>
            <div>lyrics: {song.lyrics}</div>
        </div>)}
    </div>
};

export default SongDetail;
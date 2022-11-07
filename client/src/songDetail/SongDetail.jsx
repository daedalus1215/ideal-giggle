import React from 'react';
import { useQuery } from '@apollo/client';
import { fetchSong } from '../queries';
import styles from './SongDetail.module.css';

const SongDetail = ({ params }) => {
    console.log('props', params.id)
    const { loading, error, data } = useQuery(fetchSong, { variables: { id: params.id } });
    console.log('id', data)
    return <div>
        <h3>
            SongDetail
        </h3>

        {!loading && !error && (<div className={styles.container}>
            <div>id: {data.song.id}</div>
            <div>title: {data.song.title}</div>
        </div>)}
    </div>
};

export default SongDetail;
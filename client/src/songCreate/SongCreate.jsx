import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { hashHistory } from 'react-router';
import Input from '../components/Input';
import styles from './SongCreate.module.css';
import { addSong, fetchSongs } from '../queries';

const SongCreate = () => {
    const [mutateFunction, { data, loading, error }] = useMutation(addSong);
    const [title, setTitle] = useState('');


    const onSubmit = event => {
        event.preventDefault();
        mutateFunction({
            variables: { title },
            refetchQueries: [{ fetchSongs }]
        }).then(() => {
            hashHistory.push('/');
            window.location.reload();
        });
    };

    return (<div>
        <h3>Create a New Song</h3>
        <form
            className={styles.form}
            onSubmit={onSubmit}>
            <label>Song Title:</label>
            <Input
                onChange={event => setTitle(event.target.value)}
                value={title}
            />
        </form>
    </div>);
};

export default SongCreate;
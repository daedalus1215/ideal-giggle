import React from 'react';
import { useMutation } from '@apollo/client';
import { deleteSong, fetchSongs } from '../queries';
import { hashHistory } from 'react-router';
import styles from './SongItem.module.css';

const SongItem = ({ id, title }) => {
    const [mutateFunction] = useMutation(deleteSong, { variables: { id } });

    return (<li
        className={styles.li}>
        <span
            className={styles.item}
            onClick={() => hashHistory.push(`/song/${id}`)}
        >
            {title}
        </span>

        <button
            onClick={(event) => {
                event.preventDefault();
                mutateFunction()
                    .then(() => {
                        window.location.reload();
                    });
            }}>
            <span><i className="fa fa-trash" />Delete</span>
        </button>
    </li>)
}

export default SongItem;
import { useMutation } from '@apollo/client';
import React from 'react';
import { likeLyric } from '../queries';
import styles from './LyricList.module.css';

const LyricList = ({ lyrics }) => {
    const [mutateFunction, { data, loading, error }] = useMutation(likeLyric);

    return <ul>
        {lyrics.map(({ id, content }) =>
            <li
                className={styles.li}
                key={id}>
                {content}
                <i className="fa fa-thumbs-up"
                    onClick={() => mutateFunction({ variables: { id } })}
                ></i>
            </li>)}
    </ul>
};

export default LyricList;
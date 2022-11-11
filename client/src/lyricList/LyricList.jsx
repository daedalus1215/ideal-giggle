import { useMutation } from '@apollo/client';
import React from 'react';
import { likeLyric } from '../queries';
import styles from './LyricList.module.css';

const LyricList = ({ lyrics }) => {
    const [mutateFunction, { data, loading, error }] = useMutation(likeLyric);

    return <ul>
        {lyrics.map(({ id, content, likes }) =>
            <li
                className={styles.li}
                key={id}>
                {content}
                <i className="fa fa-thumbs-up"
                    onClick={() => mutateFunction({
                        variables: { id },
                        optimisticResponse: {
                            __typename: 'Mutation',
                            likeLyric: {
                                id: id,
                                __typename: 'LyricType',
                                likes: likes + 1
                            }
                        }
                    })}
                ></i>
                {likes}
            </li>)}
    </ul>
};

export default LyricList;
import { useMutation } from '@apollo/client';
import React from 'react';
import cn from 'classnames';
import { likeLyric } from '../queries';
import styles from './LyricList.module.css';

const LyricList = ({ lyrics }) => {
    const [mutateFunction, { data, loading, error }] = useMutation(likeLyric);

    return <ul>
        {lyrics.map(({ id, content, likes }) =>
            <li
                className={styles.li}
                key={id}>
                <span className={styles.content}>{content}</span>
                <i className={cn("fa fa-thumbs-up", styles.icon)}
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
                <span className={styles.likes}>{likes}</span>
            </li>)}
    </ul>
};

export default LyricList;
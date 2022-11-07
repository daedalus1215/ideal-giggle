import React from 'react';
import { useMutation } from '@apollo/client';
import { deleteSong } from '../queries';
import { hashHistory} from 'react-router';

const SongItem = ({ id, title }) => {
    const [mutateFunction] = useMutation(deleteSong, { variables: { id } });

    return (<li
    onClick={() => hashHistory.push(`/song/${id}`)}
        className="collection-item">
        <span>
            {title}
            <button
                onClick={(event) => {
                    mutateFunction()
                        .then(() => {
                            window.location.reload(); // hack for the moment. Probs needs to update React-Router.
                        });
                }}>
                <span><i className="fa fa-trash" />Delete</span>
            </button>
        </span>
    </li>)
}

export default SongItem;
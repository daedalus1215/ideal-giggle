import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const query = gql`
mutation AddSong($title: String){
    addSong(title: $title) {
      id
      title
    }
  }
`;
const SongCreate = () => {
    const [mutateFunction, { data, loading, error }] = useMutation(query);
    const [title, setTitle] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        mutateFunction({ variables: { title } })
    };

    console.log('data', data)
    return (<div>
        <h3>Create a New Song</h3>
        <form onSubmit={onSubmit}>
            <label>Song Title:</label>
            <input
                onChange={event => setTitle(event.target.value)}
                value={title}
            />
        </form>
    </div>);
};

export default SongCreate;
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { addLyric } from '../queries';
import Input from '../components/Input';

const LyricCreate = ({ songId }) => {
    const [lyric, setLyric] = useState('');
    const [mutateFunction] = useMutation(addLyric, { variables: { songId, content: lyric } });

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit', lyric)
        mutateFunction();
    };

    return <form onSubmit={onSubmit}>
        <fieldset><label>Add a Lyric</label>
            <Input
                value={lyric}
                onChange={e => setLyric(e.target.value)}
            />
        </fieldset>
    </form>
};


export default LyricCreate;
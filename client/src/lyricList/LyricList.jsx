import React from 'react';

const LyricList = ({ lyrics }) => {
    return <ul>
        {lyrics.map(({ id, content }) => <li key={id}>{content}</li>)}
    </ul>
};

export default LyricList;
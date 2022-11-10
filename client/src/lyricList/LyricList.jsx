import React from 'react';

const LyricList = ({ lyrics }) => {
    return <ul>
        {lyrics.map(({ id, content }) => <li kley={id}>{content}</li>)}
    </ul>
};

export default LyricList;
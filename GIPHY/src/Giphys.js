import React from 'react';
import './css/giphy.css';

const Giphys = ({url,selectFunction}) => (
    <span key={url}>
        <img className="giphy-image" src={url} alt="GIF" onClick={() => selectFunction(url)}/>
    </span>
);

export default Giphys
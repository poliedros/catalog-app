import React from 'react';
import './Ad.css';

export default function Ad ({url, description}) {
  
    return <img class='unique' src={url} alt={description} title={description}></img>

}
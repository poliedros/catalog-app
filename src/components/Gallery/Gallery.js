import React, { useEffect, useState } from 'react';
import Ad from '../Ad/Ad';
import './Gallery.css';
import axios from '../../axios';

export default function Gallery () {
  const [adList, setAdList] = useState();

  useEffect(() => {
    const getData = async () => {
      const {data} = await axios.get('ads');
      setAdList(data);
    };
  });

  return <ul id='photos'>
    {adList.map(ad => <Ad url={ad.url} description={ad.description}/>)}
  </ul>

}
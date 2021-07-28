import React, { useEffect, useState } from 'react';
import Ad from '../Ad/Ad';
import './Gallery.css';
import axios from '../../axios';

export default function Gallery () {
  const [adList, setAdList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const {data} = await axios.get('ads');
      setAdList(data);
    };
    getData();
  });

  let value = "Hamburguer";

  return <ul id='photos'>
    {adList.filter(ad => ad.description.includes(value)).map(ad => <Ad url={ad.url} description={ad.description}/>)}
    {adList.map(ad => <Ad url={ad.url} description={ad.description}/>)}
  </ul>

}
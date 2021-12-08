import React, { useEffect, useState, Component } from 'react';
import Ad from '../Ad/Ad';
import './Gallery.css';
import axios from '../../axios';

//import ZoomSlider from 'react-instagram-zoom-slider'
//import { Gallery, Item } from 'react-photoswipe-gallery'

export default function Gallery () {
  const [adList, setAdList] = useState([]);

  //const slides = [<img src="..." alt="First slide" />, <img src="..." alt="Second slide" />]

  useEffect(() => {
    const getData = async () => {
      const {data} = await axios.get('ads');
      setAdList(data);
    };
    getData();
  });

  let value = "Hamburguer";

  return (
    <ul id='photos'>
      {/*{adList.filter(ad => ad.description.includes(value)).map(ad => <Ad url={ad.url} description={ad.description}/>)}*/}
      {adList.map(ad => <Ad url={ad.url} description={ad.description}/>)}
    </ul>
  )
}

{/*<Gallery>
    <Item
      original="https://placekitten.com/1024/768?image=1"
      thumbnail="https://placekitten.com/80/60?image=1"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
      )}
    </Item>
  </Gallery>*/}
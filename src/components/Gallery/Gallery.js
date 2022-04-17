import React, { useEffect, useState, Component } from 'react';
import Ad from '../Ad/Ad';

import './Gallery.css';

import axios from '../../axios';

import Container from 'react-bootstrap/Container';

import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Gallery () {
  
  const [adList, setAdList] = useState([]);
  const [adFormatList, setAdFormatList] = useState([]);

  const getData = async () => {
    const {data} = await axios.get('ads');
    setAdList(data);
  };

  useEffect(() => {
    getData();
  }, adList);

  const getDataFormat = async () => {
  const {data} = await axios.get('ad-formats');
    setAdFormatList(data);
  };

  useEffect(() => {
    getDataFormat();
  }, adFormatList); 

  var layout1 = [];

  adList.map(function myFunction(value, index, array) {
    if (index % 2 == 0)
      layout1.push({ i: value._id, x: value.order.x, y: value.order.y, w: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.width ?? 6 : 6, h: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.height ?? 1 : 1 })
    else
      layout1.push({ i: value._id, x: value.order.x, y: value.order.y, w: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.width ?? 6 : 6, h: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.height ?? 2 : 2 })
  })

  var layout = { lg: layout1 };

  console.log(adList);

  return (
    <Container>
      <ResponsiveReactGridLayout
        isDraggable={false}
        isResizable={false}
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 12 }}
        rowHeight={235}
        width={1000}
        style={{ zIndex: -1 }}
      >
        { 
          adList.map(ad => ad.urls[0] ?
            <div key={ad._id ?? ""}>
              <Ad url={ad.urls[0]} description={ad.description}/>
            </div>
            :
            <></>
          )
        }
      </ResponsiveReactGridLayout>
    </Container>
  )
}
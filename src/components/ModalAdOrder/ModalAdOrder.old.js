import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';

import axios from '../../axios';

import ModalBS from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import UploadImage from '../UploadImage/UploadImage';

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function ModalAdOrder ({ show, onHide, closeModal }) {

  const[grid, setGrid] = useState({});

  const getGrid = () => {
    console.log("GRID")
    console.log(grid)
    setGrid(layout);
  };

  useEffect(() => {
    getGrid();
  }, grid);

  const [adList, setAdList] = useState([]);

  const getData = async () => {
    const {data} = await axios.get('ads');
    setAdList(data);
  };

  useEffect(() => {
    getData();
  }, adList);

  const [adFormatList, setAdFormatList] = useState([]);

  const getDataFormat = async () => {
  const {data} = await axios.get('ad-formats');
    setAdFormatList(data);
  };

  useEffect(() => {
    getDataFormat();
  }, adFormatList);

  /* var layout = [
      { i: "a", x: 0, y: 0, w: 4, h: 1 },
      { i: "b", x: 4, y: 0, w: 4, h: 1 },
      { i: "c", x: 8, y: 0, w: 4, h: 1 },
      { i: "d", x: 0, y: 1, w: 4, h: 1 },
      { i: "e", x: 4, y: 1, w: 4, h: 1 },
      { i: "f", x: 8, y: 1, w: 4, h: 1 },
    ]; */

    /* var layout1 = [
      { i: "a", x: 0, y: 0, w: 6, h: 1 },
      { i: "b", x: 6, y: 0, w: 12, h: 1 },
      { i: "c", x: 0, y: 1, w: 6, h: 1 },
      { i: "d", x: 6, y: 1, w: 6, h: 1 },
      { i: "e", x: 0, y: 2, w: 12, h: 5 },
      { i: "f", x: 6, y: 2, w: 6, h: 1 },
      { i: "g", x: 6, y: 2, w: 6, h: 1 },
      { i: "h", x: 6, y: 2, w: 6, h: 1 },
      { i: "i", x: 6, y: 2, w: 6, h: 1 },
      { i: "j", x: 6, y: 2, w: 6, h: 1 },
      { i: "k", x: 6, y: 2, w: 6, h: 1 },
      { i: "l", x: 6, y: 2, w: 6, h: 1 },
    ]; */

    var layout1 = []
      //adList.map(ad => "{ i: '" + ad.description + "' , x: 0, y: 0, w: 12, h: 1 }")
    ;

    //adList.map(ad => layout1.push({ i: ad.description, x: posX, y: 0, w: 6, h: 1 }), posX == 6 ? posX = 0 : posX = 6)
    adList.map(function myFunction(value, index, array) {
      //console.log()
      if (index % 2 == 0)
        layout1.push({ i: value._id, x: value.order.x, y: value.order.y, w: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.width ?? 6 : 6, h: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.height ?? 1 : 1 })
      else
        layout1.push({ i: value._id, x: value.order.x, y: value.order.y, w: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.width ?? 6 : 6, h: adFormatList.filter(af => af._id == value.adFormatId)[0] ? adFormatList.filter(af => af._id == value.adFormatId)[0]?.height ?? 2 : 2 })
    })
    //layout1.push({ i: "a", x: 0, y: 0, w: 12, h: 1 })

    /* adList.map(ad => (console.log("AD"), console.log(ad))) */
    console.log("LAYOUT")
    console.log(layout1)
    console.log(adFormatList.filter(af => af._id == "611872d13a1f1854a4681008" )[0] ? adFormatList.filter(af => af._id == "611872d13a1f1854a4681008" )[0].width : 0)
    var layout = { lg: layout1 };

    console.log("LAYOUT2")
    console.log(layout)
    //getGrid();

    /* var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
    var pos = 0 */

    const[image, setImage] = useState();

    /* const getImage = async (data) => {
      console.log("DATA")
      console.log(data)
      setImage(
        <div key={letter[data.index] ?? "a"}>
          <Image
            style={{ width: "100%", height: "100%", margin: "0px" }}
            class='unique'
            src={ data.urls[0] }
            /* alt={ data.value.description }
            title={ data.value.description } *
          ></Image>
        </div>
      );
    }; */
  
    /* useEffect(() => {
      getImage();
    }, image); */

  return (
    <ModalBS
        show={ show }
        onHide={ () => closeModal(false) }
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <div style={{ textAlign: "right"}}>
        <CloseButton onClick={ () => closeModal(false) } style={{ marginRight: "16px", zIndex: "1" }}/>
      </div>
      <ModalBS.Body style={{  }}>
        <h4 style={{ marginBottom: "1.5rem"}}>Ordernar Anúncios</h4>
        {/* <div style={{ display: "flex" }}> */}
        <ResponsiveGridLayout
          className="layout"
          layouts={layout}
          breakpoints={{ lg: 1200 }}
          cols={{ lg: 12 }}
          rowHeight={281}
          width={1200}
          //onLayoutChange={layout}
        >
          {/* { adList[0] ? 
          <div key="a">
              <Image
                style={{ width: "100%", height: "100%", margin: "0px" }}
                class='unique'
                src={ adList[0].urls[0] ?? '' }
                alt={ adList[0].description ?? '' }
                title={ adList[0].description ?? '' }
              ></Image>
            </div>
            : <></>
          } */}
          {
            adList.map(ad => ad.urls[0] ?
              <div key={ad._id ?? ""}>
                <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ ad.urls[0] }
                  alt={ ad.description }
                  title={ ad.description }
                ></Image>
              </div>
              :
              <></>
            )
            //adList.forEach(ad => getImage(ad))
            
            /* <div key={letter[adI.index] ?? "a"}>
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adI.value.urls[0] }
                  alt={ adI.value.description }
                  title={ adI.value.description }
            ></Image>
          </div> */
            /*adList.map(ad =>
              <div key={letter[pos] ?? ""}>
                <Image
                      style={{ width: "100%", height: "100%", margin: "0px" }}
                      class='unique'
                      src={ ad.urls[0] }
                      alt={ ad.description }
                      title={ ad.description }
                ></Image>
              </div>, pos++, console.log(pos)
            )*/
          }
          {/* <div key="a" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[0].urls[0] ?? '' }
                  alt={ adList[0].description }
                  title={ adList[0].description }
            ></Image>
          </div>
          <div key="b" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[1].urls[0] ?? '' }
                  alt={ adList[1].description }
                  title={ adList[1].description }
            ></Image>
          </div>
          <div key="c" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[2].urls[0] ?? '' }
                  alt={ adList[2].description }
                  title={ adList[2].description }
            ></Image>
          </div>
          <div key="d" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[3].urls[0] ?? '' }
                  alt={ adList[3].description }
                  title={ adList[3].description }
            ></Image>
          </div>
          <div key="e" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[4].urls[0] ?? '' }
                  alt={ adList[4].description }
                  title={ adList[4].description }
            ></Image>
          </div>
          <div key="f" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[5].urls[0] ?? '' }
                  alt={ adList[5].description }
                  title={ adList[5].description }
            ></Image>
          </div>
          <div key="g" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[6].urls[0] ?? '' }
                  alt={ adList[6].description }
                  title={ adList[6].description }
            ></Image>
          </div>
          <div key="h" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[7].urls[0] ?? '' }
                  alt={ adList[7].description }
                  title={ adList[7].description }
            ></Image>
          </div> */}
          {/* <div key="i" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[8].urls[0] ?? '' }
                  alt={ adList[8].description }
                  title={ adList[8].description }
            ></Image>
          </div>
          <div key="j" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[9].urls[0] ?? '' }
                  alt={ adList[9].description }
                  title={ adList[9].description }
            ></Image>
          </div>
          <div key="k" >
            <Image
                  style={{ width: "100%", height: "100%", margin: "0px" }}
                  class='unique'
                  src={ adList[10].urls[0] ?? '' }
                  alt={ adList[10].description }
                  title={ adList[10].description }
            ></Image>
          </div> */}
         
        </ResponsiveGridLayout>
        {/* </div> */}
      </ModalBS.Body>
      <div style={{ textAlign: "center" }}>
        <Button onClick={ onHide } style={{ width: "auto" }}>Fechar</Button> {/* onClick={() => closeModal(false)} */}
      </div>
    </ModalBS>
  )
}

ModalAdOrder.propTypes = {};

ModalAdOrder.defaultProps = {};

//export default ModalAdOrder;

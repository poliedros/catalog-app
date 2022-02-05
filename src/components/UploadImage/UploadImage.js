import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import "./UploadImage.css";

/*const UploadImage = () => (
  <div>
    UploadImage Component
  </div>
);*/

export default function UploadImage(props) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    if (imageList.length == 3) {
        document.getElementById("upload").toggleAttribute("disabled");
        //document.getElementById("upload").removeAttribute("enabled");
    } else {
        //document.getElementById("upload").toggleAttribute("enabled");
        document.getElementById("upload").removeAttribute("disabled");
    }
    if (imageList.length == 0) {
        document.getElementById("removeAll").toggleAttribute("disabled");
    } else {
        document.getElementById("removeAll").removeAttribute("disabled");
    }
    return props.onChange(imageList);
  };

  return (
    <div className="App" style={{ width: "auto !important" }}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={3}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <Button id="upload" variant="dark" style={isDragging ? { color: "red" } : null} onClick={onImageUpload} {...dragProps}>
              <span id="span-center">
                <img className="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/user_circle_icon_172814.svg"} width="32px" />
                Click ou Arraste a Imagem para esse Botão
              </span>
            </Button>
            &nbsp;
            <Button id="removeAll" variant="dark" onClick={()=>{console.log("oi");onImageRemoveAll();document.getElementById("upload").toggleAttribute("enabled");document.getElementById("upload").removeAttribute("disabled");}}>
              <span id="span-center">
                <img className="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/user_circle_icon_172814.svg"} width="32px" />
                Eliminar Todas as Imagens
              </span>
            </Button>
            {/* <div className="table-upload"> */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", alignItems: "center", margin: "1.5rem", maxHeight: "70vh", overflowY: "scroll" }}>
            {
              imageList.map((image, index) => (
                
                <Card key={index} border="dark" style={{ width: '10rem', marginBottom: '10px' }}>
                  <Card.Body>
                    {/* <Card.Title>{ ad.description }</Card.Title>
                    <Card.Subtitle>Estado: { "Pendente" }</Card.Subtitle> */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <Image style={{ width: "100px", margin: "0px" }}
                            class='unique'
                            src={ image.data_url }
                            alt={''}
                            title={''}
                      ></Image>
                      {/* <Card.Text>
                        Propaganda do Mês
                      </Card.Text> */}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "-1rem", marginTop: "1rem" }}>
                      <Button id="submit" variant="danger" class="button-mini" onClick={() => onImageRemove(index)}>Remover</Button>
                    </div>
                  </Card.Body>
                </Card>

                  /* <div key={index} className="image-item">
                    <img src={image.data_url} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      {/* <Button id="submit" variant="dark" class="button-mini" onClick={() => onImageUpdate(index)}>SUBIR</Button> *}
                      <Button id="submit" variant="dark" class="button-mini" onClick={() => onImageRemove(index)}>Remover</Button>
                    </div>
                  </div> */
                
              ))
            }
            </div>
            {/* </div> */}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

UploadImage.propTypes = {};

UploadImage.defaultProps = {};

//export default UploadImage;

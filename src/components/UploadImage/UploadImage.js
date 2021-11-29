import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

import Button from 'react-bootstrap/Button';

import "./UploadImage.css";

/*const UploadImage = () => (
  <div>
    UploadImage Component
  </div>
);*/

export default function UploadImage() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
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
            <Button id="submit"
              variant="dark"
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              <span id="span-center">
                <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/user_circle_icon_172814.svg"} width="32px" />
                CLICK OU ARRASTE PARA AQUI
              </span>
            </Button>
            &nbsp;
            <Button id="submit"
              variant="dark"
              onClick={onImageRemoveAll}>
              <span id="span-center">
                <img class="icon ion-md-arrow-forward" src={process.env.PUBLIC_URL + "/user_circle_icon_172814.svg"} width="32px" />
                ELIMINAR TODAS AS IMAGENS
              </span>
            </Button>
            <div class="table-upload">
            {imageList.map((image, index) => (
              
                <div key={index} className="image-item">
                  <img src={image.data_url} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <Button id="submit" variant="dark" class="button-mini" onClick={() => onImageUpdate(index)}>SUBIR</Button>
                    <Button id="submit" variant="dark" class="button-mini" onClick={() => onImageRemove(index)}>REMOVER</Button>
                  </div>
                </div>
              
            ))}
            </div>
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

import React, { useState } from 'react';
import './Ad.css';
import Modal from '../Modal/Modal.js';

import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';

//import {MagnifierContainer, MagnifierPreview, MagnifierZoom, GlassMagnifier} from 'react-image-magnifiers';

export default function Ad ({ url, description }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Image style={{ width: "100%" }}
                class='unique'
                src={ url }
                alt={ description }
                title={ description }
                onClick={
                    () => setOpenModal(true)
                }
            >
            </Image>
            {
                openModal &&
                <Modal
                    show={ openModal }
                    onHide={ () => setOpenModal(false) }
                    closeModal={ () => setOpenModal(false) }
                    url={ url }
                    description={ description }
                />
            }
        </>
    )
}

    {/*<MagnifierContainer>
      <div className="example-class">
      <MagnifierPreview imageSrc={url} />
      </div>
      <MagnifierZoom style={{ height: "200px" }} imageSrc={url}/>
      </MagnifierContainer>
      <GlassMagnifier
        imageSrc={url}
        imageAlt="Example"
        largeImageSrc={url}
      />
    */}

    {/*
      openModal &&
      <Modal closeModal={ setOpenModal }
        url={url}
        description={ description }
      />
    */}
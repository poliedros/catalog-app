import React, { useState } from 'react';
import './Ad.css';
import Modal from '../Modal/Modal.js';
//import {MagnifierContainer, MagnifierPreview, MagnifierZoom, GlassMagnifier} from 'react-image-magnifiers';

export default function Ad ({url, description}) {
    
    const [openModal, setOpenModal] = useState(false);
    return <div>
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
        />*/}
        <img class='unique' src={url} alt={description} title={description} onClick={() => {setOpenModal(true)}}></img>
        {openModal && <Modal closeModal={ setOpenModal } url={url} description={description} />}
    </div>

}
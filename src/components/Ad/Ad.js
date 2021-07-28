import React, { useState } from 'react';
import './Ad.css';
import Modal from '../Modal/Modal.js';

export default function Ad ({url, description}) {
    
    const [openModal, setOpenModal] = useState(false);
    return <div>
        <img class='unique' src={url} alt={description} title={description} onClick={() => {setOpenModal(true)}}></img>
        {openModal && <Modal closeModal={ setOpenModal } url={url} description={description} />}
    </div>

}
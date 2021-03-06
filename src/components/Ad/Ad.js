import React, { useState } from 'react';
import './Ad.css';
import Modal from '../Modal/Modal.js';

import Image from 'react-bootstrap/Image';

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
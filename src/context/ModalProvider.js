import React, { createContext, useState } from 'react';
import ImageModal from '../components/ImageModal/ImageModal';

export const ModalContext = createContext();

export default function ModalProvider({ children }) {

    const [modalData, setModalData] = useState();

    const [modalAnimationState, setModalAnimationState] = useState();

    function showModal(url) {

        setModalData({
            url
        });

        setModalAnimationState('enter');
    }

    function hideModal() {
        setModalAnimationState('leave');
        setTimeout(() => {
            setModalData();
            setModalAnimationState();
        }, 3000);
    }

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            <div style={{ border: '5px solid red' }} onClick={hideModal}>
                {
                    modalData && <ImageModal url={modalData.url} animationState={modalAnimationState} />
                }
                {children}
            </div>
        </ModalContext.Provider>
    )

}
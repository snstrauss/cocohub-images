import React, { createContext, useState } from 'react';
import ImageModal from '../components/ImageModal/ImageModal';

export const ModalContext = createContext();

const ANIMATION_DURATION = 1500;
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
        }, ANIMATION_DURATION);
    }

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            <div onClick={hideModal}>
                {
                    modalData && <ImageModal url={modalData.url} animationState={modalAnimationState} animationDuration={1500} />
                }
                {children}
            </div>
        </ModalContext.Provider>
    )

}
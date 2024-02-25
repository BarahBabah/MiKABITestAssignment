import { useRef, useEffect, useCallback } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ children, setOpenModal }) => {
    const modalRef = useRef();

    const handleModalClose = useCallback(() => {
        setOpenModal(false);
    }, [setOpenModal]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleModalClose();
            }
        };

        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                handleModalClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleModalClose, setOpenModal]);

    return (
        <div className={styles['modal']}>
            <div ref={modalRef} className={styles['modal-content']}>
                <span className={styles.close} onClick={handleModalClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    setOpenModal: PropTypes.func.isRequired,
};

export default Modal;

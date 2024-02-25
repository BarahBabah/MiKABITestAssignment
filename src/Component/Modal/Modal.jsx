import { useRef, useEffect, useCallback, useState } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ children, onClose, openModal }) => {
    const modalRef = useRef();
    const [isClosing, setIsClosing] = useState(true);

    const handleModalClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, 300);
        }
    }, [onClose]);

    const handleOutsideClick = useCallback(
        (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleModalClose();
            }
        },
        [handleModalClose]
    );

    const handleKeyPress = useCallback(
        (event) => {
            if (event.key === 'Escape') {
                handleModalClose();
            }
        },
        [handleModalClose]
    );

    useEffect(() => {
        if (openModal) {
            document.addEventListener('mousedown', handleOutsideClick);
            document.addEventListener('keydown', handleKeyPress);
            setTimeout(() => setIsClosing(false), 100);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleOutsideClick, handleKeyPress, openModal]);

    return (
        <div
            className={`${styles.modal}
        ${openModal ? styles.open : ''}
        ${isClosing ? styles.closing : ''}`}
        >
            <div ref={modalRef} className={`${styles['modal-content']}`}>
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
    onClose: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
};

export default Modal;

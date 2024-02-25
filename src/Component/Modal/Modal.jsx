import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ children, setOpenModal }) => {
    const handleModalClose = () => {
        setOpenModal(false);
    };
    return (
        <div className={styles['modal']}>
            <div className={styles['modal-content']}>
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

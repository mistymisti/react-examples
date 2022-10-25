import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selected}
        contentLabel="Selected Option"
        onRequestClose={props.handleClose}
    >
        <h3>Selected Option</h3>
        <button onClick={props.handleClose}>Okay</button>
    </Modal>
);

export default OptionModal;
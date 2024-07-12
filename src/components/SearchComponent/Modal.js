import React, { useContext } from 'react';
import './Modal.scss';
import { AppContext } from '../../AppContext'; 
import { Link } from 'react-router-dom';

const Modal = ({ show, items, onClose }) => {
    const { handleItemClick } = useContext(AppContext);

    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                {items.length > 0 ? (
                    <ul>
                        {items.map(item => (
                            <Link to="/main" className="link" onClick={() => handleItemClick(item)}>
                                <li key={item.id}>
                                    <img src={item.picture} alt={item.name} />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <p>Chapter: {item.chapter}</p>
                                        <p><i className="bi bi-alarm"></i> {item.time} minutes ago</p>
                                    </div>
                                </li>
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default Modal;

import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Main.scss';

const Main = () => {
    const { selectedItem, handleSelectedItem, bellItems, setBellItems } = useContext(AppContext);

    const addToBell = (item) => {
        setBellItems([...bellItems, item]);
    };

    return (
        <>
            {selectedItem && (
                <div className='main'>
                    <img src={selectedItem.picture} alt={selectedItem.name} className='mainImage' />
                    <div className='mainDiv'>
                        <h3 className='mainName'>{selectedItem.name}</h3>
                        <p className='mainP'>Chapter: {selectedItem.chapter}</p>
                        <p className='description'>{selectedItem.description}</p>
                        <p><i className="bi bi-alarm"></i> {selectedItem.time} minutes ago</p>
                        <button onClick={() => addToBell(selectedItem)}>Add to Bell</button>
                        <input type="number" placeholder="Rate" />
                        <button>Add Rating</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Main;

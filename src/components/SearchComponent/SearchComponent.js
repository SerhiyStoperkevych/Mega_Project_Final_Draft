import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import Modal from './Modal';

function SearchComponent() {
    const { searchQuery, filteredData, handleSearchInputChange } = useContext(AppContext);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(filteredData.length > 0);
    }, [filteredData]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="search">
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInputChange}
            />
            <Modal show={showModal} items={filteredData} onClose={handleCloseModal} />
        </div>
    );
}

export default SearchComponent;

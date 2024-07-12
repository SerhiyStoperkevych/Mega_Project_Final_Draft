import React, { useState, createContext, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [data, setData] = useState([]);
    const [randomItem, setRandomItem] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const [none, setNone] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [bellItems, setBellItems] = useState([]); // Renamed to bellItems to avoid confusion

    const handleSelectedItem = (item) => {
        setSelectedItem(item);
    };

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        filterData(value);
    };

    const filterData = (query) => {
        if (!query.trim()) {
            setFilteredData([]);
        } else {
            const filtered = data.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    const toggleNone = () => {
        setNone(prevNone => !prevNone);
    };

    useEffect(() => {
        if (none) {
            document.body.classList.add('none-true');
            document.body.classList.remove('none-false');
        } else {
            document.body.classList.add('none-false');
            document.body.classList.remove('none-true');
        }
    }, [none]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/items.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const fetchedData = await response.json();
                setItems(fetchedData);
                setData(fetchedData);
                if (fetchedData.length > 0) {
                    setRandomItem(fetchedData[Math.floor(Math.random() * fetchedData.length)]);
                }
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            setRandomItem(data[Math.floor(Math.random() * data.length)]);
        }
    }, [data]);

    return (
        <AppContext.Provider value={{
            items,
            data,
            randomItem,
            none,
            isFocused,
            selectedItem,
            searchQuery,
            filteredData,
            bellItems,
            setBellItems,
            setItems,
            setData,
            setRandomItem,
            setNone,
            setIsFocused,
            setSelectedItem,
            toggleNone,
            handleSelectedItem,
            handleSearchInputChange,
            filterData,
        }}>
            {children}
        </AppContext.Provider>
    );
};

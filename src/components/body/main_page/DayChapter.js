import React, { useContext } from 'react';
import { AppContext } from '../../../AppContext'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function DayChapter() {
    const { randomItem, handleItemClick } = useContext(AppContext);

    return (
        <div className='dayChapter'>
            <ul className='nocturn'>
                <h1>Today's Chapter</h1>
                {randomItem && (
                    <li key={randomItem.id}>
                        <Link to="/main" className="link" onClick={() => handleItemClick(randomItem)}>
                            <img src={randomItem.picture} alt={randomItem.name} />
                            <div>
                                <h3>{randomItem.name}</h3>
                                <p>Chapter: {randomItem.chapter}</p>
                                <p><i className="bi bi-alarm"></i> {randomItem.time} minutes ago</p>
                            </div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default DayChapter;

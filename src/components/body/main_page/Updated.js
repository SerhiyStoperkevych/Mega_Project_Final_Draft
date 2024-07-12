import React, { useContext } from 'react';
import { AppContext } from '../../../AppContext'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Updated() {
    const { data, handleItemClick } = useContext(AppContext);

    return (
        <div className="updated">
            <h2>Recent</h2>
            <ul>
                {data.map((item, index) => (
                    <li key={item.id}>
                        <Link to="/main" className="link" onClick={() => handleItemClick(item)}>
                            <img src={item.picture} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Chapter: {item.chapter}</p>
                                <p><i className="bi bi-alarm"></i> {item.time} minutes ago</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Updated;

import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import Neww from './main_page/Neww';
import DayChapter from './main_page/DayChapter';
import New from './main_page/New';
import Popular from './main_page/Popular';
import Recent from './main_page/Recent';
import Updated from './main_page/Updated';
import Policy from './main_page/Policy';

const Body = () => {
    const { none } = useContext(AppContext);

    return (
        <div className="body" style={{ color: none ? '#eeeeee' : '#000000', backgroundColor: none ? '#2387db' : '#dc7824' }}>
            <Neww />
            <DayChapter />
            <New />
            <Popular />
            <Recent />
            <Updated />
            <Policy />
        </div>
    );
};

export default Body;

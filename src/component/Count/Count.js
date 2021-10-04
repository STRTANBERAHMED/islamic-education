import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faStickyNote, faUser, faAward } from '@fortawesome/free-solid-svg-icons';
import './Count.css';

const Count = () => {

    // font awesome
    const smile = <FontAwesomeIcon icon={faSmile} />
    const note = <FontAwesomeIcon icon={faStickyNote} />
    const user = <FontAwesomeIcon icon={faUser} />
    const award = <FontAwesomeIcon icon={faAward} />

    return (
        <div>
            <div className="count d-flex p-3">
                <div className="list col-md-3 text-center">
                    <h2>{smile}</h2>
                    <h1>8564</h1>
                    <p>HAPPY STUDENTS</p>
                </div>
                <div className="list col-md-3 text-center">
                    <h2>{note}</h2>
                    <h1>564</h1>
                    <p>OUR COURSES</p>
                </div>
                <div className="list col-md-3 text-center">
                    <h2>{user}</h2>
                    <h1>354</h1>
                    <p>OUR TEACHERS</p>
                </div>
                <div className="list col-md-3 text-center">
                    <h2>{award}</h2>
                    <h1>50</h1>
                    <p>AWARDS WON</p>
                </div>
            </div>
        </div>
    );
};

export default Count;
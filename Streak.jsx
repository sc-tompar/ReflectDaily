import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { FaStar, FaTrophy } from 'react-icons/fa';
import '../styles/Streak.css';

const Streak = () => {
    const localizer = momentLocalizer(moment);

    const events = [
        {
            title: 'Event 1',
            start: new Date(),
            end: new Date(),
        },
        {
            title: 'Event 2',
            start: new Date(moment().add(1, 'days')),
            end: new Date(moment().add(1, 'days')),
        },
    ];

    return (
        <div className="streak-main-container"> {/* Added class name */}
            <div style={{ marginTop: '90px' }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500, width: '75%', color: 'white' }}
                    className="calendar"
                />
            </div>

            <div className="streak-container">
                {/* Current Streak */}
                <h2>
                    <p>
                        <span style={{ fontWeight: 'bold', fontSize: '25px' }}>2 Days</span>
                        <FaStar style={{ fontSize: '20px', marginLeft: '10px', color: 'darkorange' }} />
                    </p>
                    <i style={{ fontStyle: 'italic', fontSize: '12px' }}>Current Streak</i>
                </h2>
            </div>

            <div className="streak-container">
                {/* Longest Streak */}
                <h2>
                    <p>
                        <span style={{ fontWeight: 'bold', fontSize: '25px' }}>5 Days</span>
                        <FaTrophy style={{ fontSize: '20px', marginLeft: '10px', color: 'darkorange' }} />
                    </p>
                    <i style={{ fontStyle: 'italic', fontSize: '12px' }}>Longest Streak</i>
                </h2>
            </div>
        </div>
    );
};

export default Streak;

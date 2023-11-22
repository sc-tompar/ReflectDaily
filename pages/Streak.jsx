import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { FaStar, FaTrophy } from 'react-icons/fa'; // Import the FaStar and FaTrophy icons from FontAwesome

const Streak = () => {
    const localizer = momentLocalizer(moment);

    // Sample events for demonstration
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
        <div>
            <div className="streak-label-container">
                <h1>STREAK</h1>
            </div>
            <div style={{ marginTop: '90px' }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500, width: '90%', background: 'lightpink', color: 'white' }}
                    className="calendar"
                />
            </div>

            {/* Container for Current Streak */}
            <div className="streak-container">
                <h2>
                    <p>
                        <span style={{ fontWeight: 'bold', fontSize: '25px' }}>2 Days</span>
                        <FaStar style={{ fontSize: '20px', marginLeft: '10px', color: 'darkorange' }} /> {/* Star icon in dark yellow */}
                    </p>
                    <i style={{ fontStyle: 'italic', fontSize: '12px' }}>Current Streak</i>
                </h2>
                {/* Add content for Current Streak */}
            </div>

            {/* Container for Longest Streak */}
            <div className="streak-container">
                <h2>
                    <p>
                        <span style={{ fontWeight: 'bold', fontSize: '25px' }}>5 Days</span>
                        <FaTrophy style={{ fontSize: '20px', marginLeft: '10px', color: 'darkorange' }} /> {/* Trophy icon in dark yellow */}
                    </p>
                    <i style={{ fontStyle: 'italic', fontSize: '12px' }}>Longest Streak</i>
                </h2>
                {/* Add content for Longest Streak */}
            </div>
        </div>
    );
};

export default Streak;

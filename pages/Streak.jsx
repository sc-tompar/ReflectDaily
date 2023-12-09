import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { FaStar, FaTrophy } from 'react-icons/fa';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/Streak.css';

const CustomEvent = ({ event }) => (
    <div className="custom-event">
      <div className="event-title">{event.title}</div>
      <div className="event-note">{event.note}</div>
      <div className="event-mood">{event.mood}</div>
    </div>
  );

    
const Streak = () => {
    const localizer = momentLocalizer(moment);
    const [reflections, setReflections] = useState([]);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);


    useEffect(() => {
        fetchReflections();
    }, []);

    const fetchReflections = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/reflections/all');
            const sortedReflections = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
            setReflections(sortedReflections);
            calculateStreaks(sortedReflections);

        } catch (error) {
            console.error('Error fetching reflections:', error);
        }
    };

    const calculateStreaks = (reflections) => {
        if (reflections.length === 0) {
            // If there are no reflections, set both streaks to 0
            setCurrentStreak(0);
            setLongestStreak(0);
            return;
        }
        if (reflections.length === 0) {
        // If there are no reflections, set both streaks to 0
        setCurrentStreak(0);
        setLongestStreak(0);
        return;
    }
        let current = 1; // Start with 1 if there's at least one reflection
        let longest = 0;
        let previousDate = reflections.length > 0 ? moment(reflections[0].date) : null;

        reflections.forEach((reflection, index) => {
            if (index === 0) return; // Skip the first item

            const currentDate = moment(reflection.date);
            if (previousDate && currentDate.diff(previousDate, 'days') === 1) {
                current++;
            } else if (currentDate.diff(previousDate, 'days') > 1) {
                current = 1; // Reset current streak if there's a gap
            }
            longest = Math.max(longest, current);
            previousDate = currentDate;
        });

        setCurrentStreak(current);
        setLongestStreak(longest);
    };

    const events = reflections.map(reflection => ({
        title: `${reflection.title} - Mood: ${reflection.mood} - Note: ${reflection.text}`,
        start: new Date(reflection.date),
        end: new Date(reflection.date),
        title: reflection.title,
        note: reflection.text,
        mood: reflection.mood,
        start: new Date(reflection.date),
        end: new Date(reflection.date),
        allDay: true, // Set the event as an all-day event

         
    }));

    const customFormats = {
        timeGutterFormat: () => '', // Remove time from time gutter
        eventTimeRangeFormat: () => '', // Remove time from events
        agendaTimeRangeFormat: () => '', // Remove time from agenda view
        agendaTimeFormat: () => '', // Remove time from agenda view
        dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
          `${localizer.format(start, 'MMM DD', culture)} — ${localizer.format(end, 'MMM DD', culture)}`, // Customize range header
      };
    
    return (
        <div className="streak-main-container">
            <div style={{ marginTop: '90px' }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500, width: '75%', color: 'white' }}
                    className="calendar"
                    components={{
                        event: CustomEvent // Use custom event component
                      }}
                                formats={customFormats} // Use custom formats to remove time

                />
            </div>
            
            <div className="streak-container">
                {/* Current Streak */}
                <h2>
                    <p>
                        <span style={{ fontWeight: 'bold', fontSize: '25px' }}>{currentStreak} Day/s</span>
                        <FaStar style={{ fontSize: '20px', marginLeft: '10px', color: 'darkorange' }} />
                    </p>
                    <i style={{ fontStyle: 'italic', fontSize: '12px' }}>Current Streak</i>
                </h2>
            </div>

            <div className="streak-container">
                {/* Longest Streak */}
                <h2>
                    <p>
                        <span style={{ fontWeight: 'bold', fontSize: '25px' }}>{longestStreak} Day/s</span>
                        <FaTrophy style={{ fontSize: '20px', marginLeft: '10px', color: 'darkorange' }} />
                    </p>
                    <i style={{ fontStyle: 'italic', fontSize: '12px' }}>Longest Streak</i>
                </h2>
            </div>
        </div>
    );
};

export default Streak;

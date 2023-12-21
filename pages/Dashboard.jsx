import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Reflection from './Reflection';
import Streak from './Streak';
import '../styles/Dashboard.css';  // Import your Dashboard styles
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [recentReflections, setRecentReflections] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetchRecentReflections();
    }, []);

    const fetchRecentReflections = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/reflections/all');
            if (response.ok) {
                const data = await response.json();
                setRecentReflections(data);
            } else {
                console.error('Failed to fetch recent reflections:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred while fetching recent reflections:', error);
        }
    };

    return (
        <div className="dashboard-container">
        <div>
            {/* Recent Reflections Section */}
            <div className="recent-reflections-section">
                <ul className="recent-reflections-list">
                    {recentReflections.map((reflection) => (
                        <li key={reflection.id} className="recent-reflection-item">
                            <Link to={`/dashboard/reflection/${reflection.id}`} className="recent-reflection-link">
                            <div className="recent-reflection-title">{reflection.title}</div>
                            <div className="recent-reflection-mood">{reflection.mood}</div>
                            <div className="recent-reflection-date">{reflection.date}</div>
                            </Link>
                            
                        </li>
                    ))}
                    
                </ul>
                
            <Streak />
            
            </div>

       
        </div>
        
        </div>
    );
};

export default Dashboard;

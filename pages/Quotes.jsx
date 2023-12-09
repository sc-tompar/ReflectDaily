import React, { useState, useEffect } from 'react';
import { FaHeart, FaTimes } from 'react-icons/fa';
import axios from 'axios';
import '../styles/Quotes.css';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [bgColor, setBgColor] = useState('');
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const fetchQuotes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/quote/getAll');
                if (response.data && Array.isArray(response.data)) {
                    setQuotes(response.data);
                    setAnimate(true);
                } else {
                    console.error('Invalid response data:', response.data);
                }
            } catch (error) {
                console.error('Error fetching quotes:', error);
            }
        };

        fetchQuotes();
    }, []);

    const nextQuote = () => {
        setAnimate(false); 
        setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % quotes.length);
            setBgColor(getRandomColor());
            setAnimate(true); 
        }, 300); 
    };

    const getRandomColor = () => {
        const colors = ['#e5a692', '#605ab3', '#fcba03', '#ff4757', '#3498db', '#9b59b6'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const toggleFavorite = async () => {
        if (quotes.length > 0) {
            const quote = quotes[activeIndex];
            try {
                const response = await axios.put(`http://localhost:8080/quote/toggleFavorite/${quote.id}`);
                const updatedQuote = response.data;

                setQuotes(quotes.map(q => q.id === quote.id ? updatedQuote : q));
            } catch (error) {
                console.error('Error toggling favorite:', error);
            }
        }
    };

    return (
        <div className="quotes-main-container">
            <div className="quotes-header">
                <h2 className="quotes-title">Daily Quotes</h2>
                <p className="quotes-instruction">Click on the heart to favorite a quote or the X to see the next one</p>
            </div>

            {quotes.length > 0 ? (
                <div className={`quote-container ${animate ? 'active-container' : ''}`} style={{ backgroundColor: bgColor }}>
                    <p className="quote-text">
                        "{quotes[activeIndex].quote}"
                        <span className="quote-author">- {quotes[activeIndex].author}</span>
                    </p>
                    {quotes[activeIndex].isFavorite && <FaHeart className="internal-like-icon" />}
                </div>
            ) : (
                <p className="quote-text">No quotes available.</p>
            )}

            <div className="controls">
                <FaTimes className="next-icon" onClick={nextQuote} />
                <FaHeart className="like-icon" onClick={toggleFavorite} />
            </div>
        </div>
    );
};

export default Quotes;
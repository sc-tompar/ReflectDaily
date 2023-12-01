import React, { useState } from 'react';
import { FaHeart, FaPowerOff } from 'react-icons/fa';
import '../styles/Quotes.css';

const Quotes = () => {
    const [activeContainer, setActiveContainer] = useState('quote');
    const [likedContainers, setLikedContainers] = useState(new Set());

    const nextContainer = () => {
        setActiveContainer(prev => {
            switch (prev) {
                case 'quote': return 'red';
                case 'red': return 'yellow';
                case 'yellow': return 'blue';
                case 'blue': return 'green';
                case 'green': return 'purple';
                default: return 'quote';
            }
        });
    };

    const toggleLike = () => {
        setLikedContainers(prevLiked => {
            const newLiked = new Set(prevLiked);
            if (newLiked.has(activeContainer)) {
                newLiked.delete(activeContainer);
            } else {
                newLiked.add(activeContainer);
            }
            return newLiked;
        });
    };

    return (
        <div className="quotes-main-container">
            <div className={`quote-container ${activeContainer === 'quote' ? 'active-container' : ''}`}>
                <p className="quote-text">
                    "Act as if what you do makes a difference. It does."
                    <span className="quote-author">- William James</span>
                </p>
                {likedContainers.has('quote') && <FaHeart className="internal-like-icon" />}
            </div>

            <div className={`stock-container red-container ${activeContainer === 'red' ? 'active-container' : ''}`}>
                <p className="quote-text">
                    "It does not do to dwell on dreams and forget to live."
                    <span className="quote-author">- J.K. Rowling</span>
                </p>
                {likedContainers.has('red') && <FaHeart className="internal-like-icon" />}
            </div>

            <div className={`stock-container yellow-container ${activeContainer === 'yellow' ? 'active-container' : ''}`}>
                <p className="quote-text">
                    "You only live once, but if you do it right, once is enough."
                    <span className="quote-author">- Mae West</span>
                </p>
                {likedContainers.has('yellow') && <FaHeart className="internal-like-icon" />}
            </div>

            <div className={`stock-container blue-container ${activeContainer === 'blue' ? 'active-container' : ''}`}>
                <p className="quote-text">
                    "The purpose of our lives is to be happy."
                    <span className="quote-author">- Dalai Lama</span>
                </p>
                {likedContainers.has('blue') && <FaHeart className="internal-like-icon" />}
            </div>

            <div className={`stock-container green-container ${activeContainer === 'green' ? 'active-container' : ''}`}>
                <p className="quote-text">
                    "Life is what happens when you're busy making other plans."
                    <span className="quote-author">- John Lennon</span>
                </p>
                {likedContainers.has('green') && <FaHeart className="internal-like-icon" />}
            </div>

            <div className={`stock-container purple-container ${activeContainer === 'purple' ? 'active-container' : ''}`}>
                <p className="quote-text">
                    "Get busy living or get busy dying."
                    <span className="quote-author">- Stephen King</span>
                </p>
                {likedContainers.has('purple') && <FaHeart className="internal-like-icon" />}
            </div>

            <FaPowerOff className="shutdown-icon" onClick={nextContainer} />
            <FaHeart className="like-icon" onClick={toggleLike} />
        </div>
    );
};

export default Quotes;

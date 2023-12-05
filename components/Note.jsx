import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import '../styles/Reflection.css';

const Note = ({ id, title, text, date, mood, handleDeleteNote }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const deleteNote = async () => {
    // Display confirmation dialog
    const confirmed = window.confirm('Are you sure you want to delete this record?');

    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:8080/api/reflections/delete/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          handleDeleteNote(); // Fetch updated reflections after deleting one
          alert('Record successfully deleted'); // Show success message
        } else {
          console.error('Failed to delete reflection:', response.statusText);
          alert('Failed to delete record'); // Show error message
        }
      } catch (error) {
        console.error('An error occurred while deleting reflection:', error);
        alert('An error occurred while deleting record'); // Show error message
      }
    }
  };

  return (
    <div className='note'>
      <div className='note-head'>
        <span className='note-title'>{title}</span>
        <MdDeleteForever onClick={() => setShowConfirmation(true)} className='delete-icon' size='1.3em' />
      </div>
      <span className='note-body'>{text}</span>
      <div className="note-footer">
        <small className='mood'>{mood}</small>
        <small>{date}</small>
      </div>

      {/* Confirmation dialog */}
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this record?</p>
          <button onClick={() => deleteNote()}>Yes</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default Note;

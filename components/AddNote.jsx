import { useState } from 'react';
import '../styles/Reflection.css';

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [noteMood, setNoteMood] = useState('');
  const characterLimit = 600;
  const titleLimit = 25;

  const handleChangeTitle = (event) => {
    if (titleLimit - event.target.value.length >= 0) {
      setNoteTitle(event.target.value);
    }
  };

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleMoodChange = (event) => {
    setNoteMood(event.target.value);
  };

  const handleSaveClick = async () => {
    if (noteText.trim().length > 0) {
      try {
        const date = new Date().toLocaleDateString();
        const response = await fetch('http://localhost:8080/api/reflections/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: noteTitle, // Make sure the key is 'title' on the server side
            text: noteText,
            mood: noteMood,
            date,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          handleAddNote(data); // Pass the newly added note to handleAddNote
          setNoteTitle('');
          setNoteText('');
          setNoteMood('');
          alert('Record successfully saved');
        } else {
          console.error('Failed to add reflection:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred while adding reflection:', error);
      }
    }
  };

  return (
    <div className="note new">
      <textarea
        rows='2'
        cols='10'
        placeholder='Title...'
        value={noteTitle}
        onChange={handleChangeTitle}
      ></textarea>
      <textarea
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <input className='mod'
        type='text'
        placeholder='Mood...'
        value={noteMood}
        onChange={handleMoodChange}
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length}</small>
        <button className='save' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;

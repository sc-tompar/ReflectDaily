import { useState } from 'react';
import '../styles/Reflection.css';

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [noteMood, setNoteMood] = useState('');
  const characterLimit = 200;
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

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, noteTitle, noteMood); // Pass mood to handleAddNote
      setNoteTitle('');
      setNoteText('');
      setNoteMood('');
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

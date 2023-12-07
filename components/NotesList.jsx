import React from 'react';
import Note from '../components/Note';
import AddNote from '../components/AddNote';
import '../styles/Reflection.css';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, updateNote }) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    date={note.date}
                    mood={note.mood}
                    handleDeleteNote={() => handleDeleteNote(note.id)}
                    updateNote={(id, editedTitle, editedText, editedMood) =>
                        updateNote(note.id, editedTitle, editedText, editedMood)
                    }
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;

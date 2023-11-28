import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import '../styles/Reflection.css';
import NotesList from '../components/NotesList';
import Search from '../components/Search';
//import AddNote from '../components/AddNote';
//import MultiFilters from '../components/MultiFilters';

 
const Reflection = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            title: "title",
            text: "third Note",
            date: "22/11/23",
            Mood: 'happy'
        }
    ]);
 
    const [searchText, setSearchText] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
 
    const addNote = (text, title, mood) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            title: title,
            text: text,
            date: date.toLocaleDateString(),
            mood: mood,
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };
 
    const deleteNote = (id) => {
const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }
 
    return (
        <div>
            <div className='header'>
                <h1>Reflection</h1>
                {/* <MultiFilters/> */}
            </div>
            <div className='cons'>
            <Search handleSearchNote={setSearchText} handleSearchTitle={setSearchTitle} />
                <NotesList
                    notes={notes.filter((note) =>
                        (note.text?.toLowerCase().includes(searchText) || false) ||
                        (note.title?.toLowerCase().includes(searchTitle) || false)
                    )}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    );
};
 
export default Reflection;
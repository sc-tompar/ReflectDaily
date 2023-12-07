import React, { useState, useEffect } from 'react';
import '../styles/Reflection.css';
import NotesList from '../components/NotesList';
import Search from '../components/Search';

const Reflection = () => {
    const [notes, setNotes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchTitle, setSearchTitle] = useState('');

    useEffect(() => {
        // Fetch reflections from the backend on component mount
        fetchReflections();
    }, []);

    const fetchReflections = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/reflections/all');
            if (response.ok) {
                const data = await response.json();
                setNotes(data);
            } else {
                console.error('Failed to fetch reflections:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred while fetching reflections:', error);
        }
    };

    const addNote = async (text, title, mood) => {
        try {
          const date = new Date().toLocaleDateString();
          const response = await fetch('http://localhost:8080/api/reflections/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, title, mood, date }),
          });
      
          if (response.ok) {
            
            const newNote = await response.json();
            setNotes((prevNotes) => [...prevNotes, newNote]);
          } else {
            console.error('Failed to add reflection:', response.statusText);
          }
        } catch (error) {
          console.error('An error occurred while adding reflection:', error);
        }
      };
      
      const deleteNote = async (id) => {
        try {
          const response = await fetch(`http://localhost:8080/api/reflections/delete/${id}`, {
            method: 'DELETE',
          });
      
          if (response.ok) {
            setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
          } else {
            console.error('Failed to delete reflection:', response.statusText);
          }
        } catch (error) {
          console.error('An error occurred while deleting reflection:', error);
        }
      };

      const updateNote = async (id, editedTitle, editedText, editedMood) => {
        try {
            const response = await fetch(`http://localhost:8080/api/reflections/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: editedTitle,
                    text: editedText,
                    mood: editedMood,
                }),
            });

            if (response.ok) {
                fetchReflections(); // Fetch updated reflections after editing
                alert('Record successfully edited'); // Show success message
            } else {
                console.error('Failed to edit reflection:', response.statusText);
                alert('Failed to edit record'); // Show error message
            }
        } catch (error) {
            console.error('An error occurred while editing reflection:', error);
            alert('An error occurred while editing record'); // Show error message
        }
    };


    return (
        <div>
            <div className='header'>
                <h1 className='header'>Reflection</h1>
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
                    updateNote={updateNote}
                />
            </div>
        </div>
    );
};

export default Reflection;

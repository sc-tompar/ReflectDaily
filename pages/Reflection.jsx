import React, { useState, useEffect } from 'react';
import '../styles/Reflection.css';
import NotesList from '../components/NotesList';
import Search from '../components/Search';

const Reflection = () => {
    const [notes, setNotes] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [sortByDate, setSortByDate] = useState(false);
    const [moods, setMoods] = useState([]);
    const [selectedMood, setSelectedMood] = useState('');
   


    useEffect(() => {
        // Fetch reflections from the backend on component mount
        fetchReflections();
        fetchMoods();
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

    const fetchMoods = async () => {
      try {
          const response = await fetch('http://localhost:8080/api/reflections/moods');
          if (response.ok) {
              const data = await response.json();
              setMoods(data);
          } else {
              console.error('Failed to fetch moods:', response.statusText);
          }
      } catch (error) {
          console.error('An error occurred while fetching moods:', error);
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


   

  const toggleSortByDate = () => {
    setSortByDate((prevSortByDate) => !prevSortByDate);
    setNotes((prevNotes) => {
        const sortedNotes = [...prevNotes].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortByDate ? dateA - dateB : dateB - dateA;
        });
        return sortedNotes;
    });
};



    return (
        
            <div className='bodynas'>
            
         <div className='cons'>
                <div className='search-sort-container'>
                    <div className='search-note'>
                        <Search handleSearchNote={setSearchText} handleSearchTitle={setSearchTitle} />
                    </div>
                    
                    <div>
                        <button className='sort-button' onClick={toggleSortByDate}>
                            {sortByDate ? 'Sort by Oldest Date' : 'Sort by Latest Date'}
                        </button>
                    </div>
                </div>

                <div className='filter-note'>
                <label htmlFor='moodFilter'>Filter by Mood:</label>
                <select
                    id='moodFilter'
                    onChange={(e) => setSelectedMood(e.target.value)}
                    value={selectedMood}
                >
                    <option value=''>All Moods</option>
                    {moods.map((mood) => (
                        <option key={mood} value={mood}>
                            {mood}
                        </option>
                    ))}
                </select>
            </div>
                            
            <NotesList
                    notes={notes.filter((note) =>
                        (note.text || '').toLowerCase().includes(searchText.toLowerCase()) ||
                        (note.text || '').toUpperCase().includes(searchText.toUpperCase()) ||
                        (note.title || '').toLowerCase().includes(searchTitle.toLowerCase()) ||
                        (note.title || '').toUpperCase().includes(searchTitle.toUpperCase())
                    ).filter((note) => selectedMood === '' || note.mood === selectedMood)}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                    updateNote={updateNote}
                />
            </div>
            </div>
    );
};

export default Reflection;

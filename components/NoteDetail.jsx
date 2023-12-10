import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdSave, MdEdit, MdDeleteForever, MdInsertPhoto } from 'react-icons/md';
import '../styles/reflectiondetails.css';

const NoteDetail = ({ handleDeleteNote, updateNote }) => {
    const { id } = useParams();
    const [reflection, setReflection] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedText, setEditedText] = useState('');
    const [editedMood, setEditedMood] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchReflectionDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/reflections/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setReflection(data);
                    setEditedTitle(data.title);
                    setEditedText(data.text);
                    setEditedMood(data.mood);
                } else {
                    console.error('Failed to fetch reflection details:', response.statusText);
                }
            } catch (error) {
                console.error('An error occurred while fetching reflection details:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchReflectionDetails();
    }, [id]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
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
                setReflection((prevReflection) => ({
                    ...prevReflection,
                    title: editedTitle,
                    text: editedText,
                    mood: editedMood,
                }));
                setIsEditing(false);
            } else {
                console.error('Failed to edit reflection:', response.statusText);
            }
        } catch (error) {
            console.error('An error occurred while editing reflection:', error);
        }
    };

    const handleDeleteClick = async () => {
        const confirmed = window.confirm('Are you sure you want to delete this reflection?');
        if (confirmed) {
            try {
                const response = await fetch(`http://localhost:8080/api/reflections/delete/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    handleDeleteNote(); // Fetch updated reflections after deleting one
                    alert('Reflection successfully deleted'); // Show success message
                } else {
                    console.error('Failed to delete reflection:', response.statusText);
                    alert('Failed to delete reflection'); // Show error message
                }
            } catch (error) {
                console.error('An error occurred while deleting reflection:', error);
                alert('An error occurred while deleting reflection'); // Show error message
            }
        }
    };

    const handleInsertImage = async () => {
        // Assume you have an endpoint for handling image uploads
        const imageUrl = '...'; // Replace with the actual URL after image upload
        setEditedText((prevText) => `${prevText} ![Alt Text](${imageUrl}) `);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="reflection-details">
            {isEditing ? (
                <div className='edit-mode'>
                    <input
                        type='text'
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        placeholder='Enter a title'
                    />
                    <textarea
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                        placeholder='Type to edit...'
                    ></textarea>
                    <input
                        type='text'
                        value={editedMood}
                        onChange={(e) => setEditedMood(e.target.value)}
                        placeholder='Enter a mood'
                    />
                    <button onClick={handleSaveClick}>
                        <MdSave className='save-icon' size='1.3em' />
                    </button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                    <button onClick={handleInsertImage}>
                        <MdInsertPhoto className='insert-image-icon' size='1.3em' />
                    </button>
                </div>
            ) : (
                <>
                <div className="reflection-container">
                       <h2 className='reflection-title'>{reflection.title}</h2>
                        <p className='reflection-text'>{reflection.text}</p>
                        <div className='note-footer reflection-footer'>
                            <small className='mood'>{reflection.mood}</small>
                            <small className='date'>{reflection.date}</small>
                        <div className='icons-container'>
                            <MdEdit onClick={handleEditClick} className='edit-icon' size='1.3em' />
                            <MdInsertPhoto className='insert-image-icon' size='1.3em' onClick={handleInsertImage} />
                            <MdDeleteForever onClick={handleDeleteClick} className='delete-icon' size='1.3em' />
                        </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default NoteDetail;

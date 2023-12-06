import { useState } from 'react';
import { MdDeleteForever, MdEdit, MdSave, MdInsertPhoto } from 'react-icons/md';
import '../style/Reflection.css';

const Note = ({ id, title, text, date, mood, handleDeleteNote, updateNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedText, setEditedText] = useState(text);
    const [editedMood, setEditedMood] = useState(mood);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        updateNote(id, editedTitle, editedText, editedMood);
        setIsEditing(false);
    };

    const handleInsertImage = () => {
        // Create a file input element
        const input = document.createElement('input');
        input.type = 'file';

        // Trigger the file input click event
        input.click();

        // Handle the file selection event
        input.addEventListener('change', (event) => {
            const file = event.target.files[0];

            if (file) {
                // You may want to use FileReader or upload the file to a server
                // For simplicity, I'll set the image URL directly
                const imageUrl = URL.createObjectURL(file);
                setEditedText((prevText) => `${prevText} ![Alt Text](${imageUrl}) `);
            }
        });
    };

    return (
        <div className={`note ${isEditing ? 'editing' : ''}`}>
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
                    <button onClick={handleInsertImage}>
                        <MdInsertPhoto className='insert-image-icon' size='1.3em' />
                    </button>
                </div>
            ) : (
                <>
                    <div className='note-head'>
                        <span className='note-title'>{title}</span>
                        <div className='note-icons'>
                            <MdEdit onClick={handleEditClick} className='edit-icon' size='1.3em' />
                            <MdInsertPhoto className='insert-image-icon' size='1.3em' onClick={handleInsertImage} />
                            <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em' />
                        </div>
                    </div>
                    <span className='note-body'>{text}</span>
                    <div className='note-footer'>
                        <small className='mood'>{mood}</small>
                        <small>{date}</small>
                    </div>
                </>
            )}
        </div>
    );
};

export default Note;

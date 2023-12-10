import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDeleteForever, MdEdit, MdSave, MdInsertPhoto,  MdZoomIn } from 'react-icons/md';
import '../styles/Reflection.css';

const Note = ({id, title, text, date, mood, handleDeleteNote, updateNote }) => {
    const navigate = useNavigate();
    const [isExpanded, setIsExpanded] = useState(false); //this one is newly added
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedText, setEditedText] = useState(text);
    const [editedMood, setEditedMood] = useState(mood);

    

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            navigate(`/dashboard/reflection/${id}`);        //this one is newly added
        }
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
              updateNote(id, editedTitle, editedText, editedMood); // Pass the correct parameters
              alert('Record successfully edited'); // Show success message
              setIsEditing(false);
          } else {
              console.error('Failed to edit reflection:', response.statusText);
              alert('Failed to edit record'); // Show error message
          }
      } catch (error) {
          console.error('An error occurred while editing reflection:', error);
          alert('An error occurred while editing record'); // Show error message
      }
  };

    const handleDeleteClick = async () => {
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

    const handleInsertImage = () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.click();
      input.addEventListener('change', async (event) => {
        const file = event.target.files[0];
        if (file) {
          try {
            const formData = new FormData();
            formData.append('image', file);
    
            const response = await fetch(`http://localhost:8080/api/reflections/upload-image`, {
              method: 'POST',
              body: formData,
            });
            //I NEGLECT LANG SA NI NING handleInsertImage 
    
            if (response.ok) {
              const imageUrl = await response.text(); // Use text() instead of json()
              setEditedText((prevText) => `${prevText} ![Alt Text](${imageUrl}) `);
            } else {
              console.error('Failed to upload image:', response.statusText);
            }
          } catch (error) {
            console.error('An error occurred while uploading image:', error);
          }
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
                    <button onClick={() => setIsEditing(false)}>
                        Cancel
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
                            <MdDeleteForever onClick={handleDeleteClick} className='delete-icon' size='1.3em' />
                            <MdZoomIn onClick={handleExpandClick} className='expand-icon' size='1.3em' /> //this one is newly added
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

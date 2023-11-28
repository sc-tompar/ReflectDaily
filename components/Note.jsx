import { MdDeleteForever } from 'react-icons/md';
import '../styles/Reflection.css';

const Note = ({ id, title, text, date, mood, handleDeleteNote }) => {
    return (
        <div className='note'>
            <div className='note-head'>
                <span className='note-title'>
                    {title}
                </span>
                <MdDeleteForever 
                    onClick={ () => handleDeleteNote(id) }
                    className='delete-icon' 
                    size='1.3em'/>
            </div>
            <span className='note-body'>
                {text}
            </span>
            <div className="note-footer">
                <small className='mood'>{mood}</small>
                <small>{date}</small>
            </div>
        </div>
    );
};

export default Note;
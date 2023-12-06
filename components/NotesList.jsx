import Note from './Note';
import AddNote from './AddNote';
import '../style/Reflection.css';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, updateNote }) => {
    return (
        <div className='notes-list'>
            {notes.map((note) => (
                <Note 
                    key={note.id}
                    id={note.id} 
                    title= {note.title}
                    text={note.text} 
                    date={note.date}
                    mood={note.mood}
                    handleDeleteNote={handleDeleteNote}
                    updateNote={updateNote}
                    />
            ))}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NotesList;

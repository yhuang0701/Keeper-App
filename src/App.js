import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import NoteItems from './Notes';
import CreateArea from './components/CreateArea';

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        });
    };

    return (
        <>
            <Header />

            <CreateArea
                onAdd={addNote}
            />

            {/* {NoteItems.map(noteItem => (
                <Note
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            ))} */}

            {notes.map((noteItem, index) => {
                return <Note
                    key={index}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            })}


            <Footer />
        </>
    )
};

export default App;
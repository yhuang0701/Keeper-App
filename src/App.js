import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import NoteItems from './Notes';

function App() {
    return (
        <>
            <Header />

            {NoteItems.map(noteItem => (
                <Note
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            ))};


            <Footer />
        </>
    )
};

export default App;
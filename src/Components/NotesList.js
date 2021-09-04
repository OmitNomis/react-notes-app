import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleUpdateNote, handleDeleteNote }) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Notes
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleUpdateNote={handleUpdateNote} />
		</div>
	);
};

export default NotesList;

import React, { useState } from "react";

const AddNote = ({ handleUpdateNote }) => {
	const [addNote, setAddNote] = useState("");
	const handleChange = (e) => {
		if (characterLimit - e.target.value.length >= 0) {
			setAddNote(e.target.value);
		}
	};
	const handleSaveClick = () => {
		if (addNote.trim().length > 0) {
			handleUpdateNote(addNote);
			setAddNote("");
		} else {
			alert("Please add some characters.");
		}
	};
	const characterLimit = 200;

	return (
		<div className='note new-note'>
			<textarea
				column='10'
				rows='8'
				placeholder='Type to enter note...'
				value={addNote}
				onChange={handleChange}
			></textarea>
			<div className='note-footer'>
				<span>
					{characterLimit - addNote.length}/{characterLimit}
				</span>
				<button onClick={handleSaveClick} className='save'>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNote;

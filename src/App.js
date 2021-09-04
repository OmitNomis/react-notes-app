import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./index.css";
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import Header from "./Components/Header";

const App = () => {
	const [notes, setNotes] = useState([]);
	const updateNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	const [searchText, setSearchText] = useState("");

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
	}, [notes]);

	return (
		<div className={`${darkMode && "dark-mode"}`}>
			<div className='container'>
				<Header handleDarkMode={setDarkMode} />
				<Search handleSearchText={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleUpdateNote={updateNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;

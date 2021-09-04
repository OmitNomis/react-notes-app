import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchText }) => {
	return (
		<div className='search'>
			<MdSearch className='search-icon' size='1.3em' />
			<input
				type='text'
				onChange={(e) => {
					handleSearchText(e.target.value);
				}}
				placeholder='Search for notes...'
			/>
		</div>
	);
};
export default Search;

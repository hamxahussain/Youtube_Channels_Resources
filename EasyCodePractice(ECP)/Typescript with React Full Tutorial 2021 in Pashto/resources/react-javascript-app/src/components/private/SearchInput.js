import React from "react";

const SearchInput = ({ children, onChangeSearch, ...props }) => {
	return (
		<>
			<div className="search">
				<input
					type="text"
					name="search"
					placeholder="Find a student"
					onChange={onChangeSearch}
				/>
			</div>
		</>
	);
};

export default SearchInput;

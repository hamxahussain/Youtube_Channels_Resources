import React from "react";

export interface IProps {
	onChangeSearch:
		| undefined
		| ((event: React.ChangeEvent<HTMLInputElement>) => void);
}

const SearchInput: React.FC<IProps> = ({
	onChangeSearch,
	...props
}): JSX.Element => {
	return (
		<>
			<div className="search">
				<input
					type="text"
					name="search"
					placeholder="Find a student using name..."
					onChange={onChangeSearch}
				/>
			</div>
		</>
	);
};

export default SearchInput;

import React from "react";
import ChangesComponent from "./private/ChangesComponent";
import DataComponent from "./private/DataComponent";
import BoxContainer from "./private/BoxContainer";
import SearchInput from "./private/SearchInput";

const ItemList = ({
	children,
	onDelete = () => null,
	onChangeSearch,
	userInfo = [],
	...props
}) => {
	return (
		<div className="flex add-w-100 items-list-container  self-start">
			<SearchInput onChangeSearch={onChangeSearch} />
			<div className="flex remove-wraping flex-wrap-center items-list">
				{userInfo.map((info, i) => {
					return (
						<>
							<BoxContainer>
								<DataComponent userInfo={info} />
								<ChangesComponent
									onDelete={() => onDelete(info.cnic)}
								/>
							</BoxContainer>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default ItemList;

import React from "react";
import ChangesComponent, { IDType } from "./private/ChangesComponent";
import DataComponent from "./private/DataComponent";
import BoxContainer from "./private/BoxContainer";
import SearchInput from "./private/SearchInput";
import { IForm } from "./Form";

interface IProps {
	onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onDelete: (
		event: React.MouseEvent<SVGElement, MouseEvent>,
		id?: IDType
	) => void;
	userInfo: IForm[];
}

const ItemList: React.FC<IProps> = ({
	onDelete,
	onChangeSearch,
	userInfo = [],
	...props
}): JSX.Element => {
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
									onDelete={(e, id) => onDelete(e, info.cnic)}
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

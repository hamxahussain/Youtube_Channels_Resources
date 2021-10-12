import React from "react";
import { RiDeleteBin6Line, FaRegEdit } from "react-icons/all";

export type IDType = string | number | undefined | null;

interface IProps {
	onDelete: (
		event: React.MouseEvent<SVGElement, MouseEvent>,
		id?: IDType
	) => void;
}
const ChangesComponent: React.FC<IProps> = ({
	onDelete,
	...props
}): JSX.Element => {
	return (
		<>
			<div
				className="horizontally-center"
				style={{ justifyContent: "flex-end" }}
			>
				<RiDeleteBin6Line
					onClick={onDelete}
					className="changes-options"
				/>
			</div>
		</>
	);
};

export default ChangesComponent;

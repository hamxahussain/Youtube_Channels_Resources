import React from "react";
import { RiDeleteBin6Line, FaRegEdit } from "react-icons/all";

const ChangesComponent = ({ children, onDelete, ...props }) => {
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

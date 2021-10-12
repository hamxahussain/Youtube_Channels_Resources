import React from "react";

const BoxContainer = ({ children, ...props }) => {
	return (
		<>
			<div className="box-container">{children}</div>
		</>
	);
};

export default BoxContainer;

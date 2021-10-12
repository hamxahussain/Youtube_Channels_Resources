import React from "react";

const BoxContainer: React.FC = ({ ...props }): JSX.Element => {
	return (
		<>
			<div className="box-container">{props.children}</div>
		</>
	);
};

export default BoxContainer;

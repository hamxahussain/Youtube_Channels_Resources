import React from "react";

const Strip = ({ children, onClick, status = true, message, ...props }) => {
	return (
		<div className="strip-container">
			<div className="strip">
				<p>auto</p>
				<h5 onClick={onClick}>
					{status ? message || "enable" : message || "disable"}
				</h5>
			</div>
		</div>
	);
};

export default Strip;

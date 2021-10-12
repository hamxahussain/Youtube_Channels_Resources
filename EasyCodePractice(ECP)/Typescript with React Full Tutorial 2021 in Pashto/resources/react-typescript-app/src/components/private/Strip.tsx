import React from "react";

interface IProps {
	onClick: () => void;
	status: boolean;
	message?: string;
}
const Strip: React.FC<IProps> = ({
	onClick,
	status = true,
	message,
	...props
}): JSX.Element => {
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

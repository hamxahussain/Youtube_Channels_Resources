import React from "react";

interface IProps {
	radius?: number;
	margin?: string;
	bgColor?: string;
	height?: number;
}

const Separator: React.FC<IProps> = ({
	radius,
	margin,
	bgColor,
	height,
	...props
}): JSX.Element => {
	return (
		<>
			<div
				style={{
					height: height || 1,
					width: "100%",
					backgroundColor: bgColor || "rgb(200,200,200)",
					borderRadius: radius,
					margin,
				}}
			/>
		</>
	);
};

export default Separator;

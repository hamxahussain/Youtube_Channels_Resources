import React from "react";

const Separator = ({ children, radius, margin, bgColor, height, ...props }) => {
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

import React from "react";
import logo from "./../assets/logo.svg";
import Separator from "./private/Separator";

const Title = (): JSX.Element => {
	return (
		<>
			<div className="horizontally-center">
				<img src={logo} className="app-logo" />
				<h1 className="title">Students Management App.</h1>
			</div>
			<Separator />
		</>
	);
};

export default Title;

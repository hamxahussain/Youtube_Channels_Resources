import React, { Fragment, useState, useEffect } from "react";
import { MdSwitchAccount } from "react-icons/all";
import Strip from "./private/Strip";

type IInput =
	| React.ChangeEvent<HTMLInputElement>
	| React.ChangeEvent<HTMLTextAreaElement>;

export interface IForm {
	first_name: string;
	last_name: string;
	full_name: string;
	contact_number: number;
	cnic: number;
	gender: string;
	about: string;
	image_url: string;
}
interface IProps {
	onAdd: (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		data: IForm
	) => void;
}

const Form: React.FC<IProps> = ({ onAdd }): JSX.Element => {
	const [formData, setFormData] = useState<IForm>({
		first_name: "",
		last_name: "",
		full_name: "",
		contact_number: Number(),
		cnic: Number(),
		gender: "",
		about: "",
		image_url: "",
	});
	const [fullNameStatus, setFullNameStatus] = useState<boolean>(true);

	const handleFormChanges = (e: IInput) => {
		setFormData({
			...formData,
			[e.target.name]:
				e.target.name === ("cnic" || "contact_number")
					? +e.target.value
					: e.target.value,
		});
	};
	const checkFormValidation = () => {
		return (formData.gender &&
			formData.about &&
			formData.cnic.toString().length < 13 &&
			formData.first_name &&
			formData.last_name &&
			formData.full_name &&
			formData.about) === ""
			? false
			: true;
	};
	useEffect(() => {
		if (fullNameStatus === true) {
			setFormData({
				...formData,
				full_name: `${formData.first_name} ${formData.last_name}`,
			});
		}
	}, [
		formData.full_name,
		formData.last_name,
		formData.first_name,
		fullNameStatus,
	]);

	return (
		<>
			<div className="self-start flex add-w-100 scroll-auto">
				<div className="form flex">
					<h3>
						<MdSwitchAccount className="student-icon" />
						Student Form
					</h3>
					<Fragment>
						<span className="span-staric">*</span>
						<input
							placeholder="First Name"
							name="first_name"
							onChange={handleFormChanges}
							type="text"
						/>
					</Fragment>
					<Fragment>
						<span className="span-staric">*</span>
						<input
							placeholder="Last Name"
							name="last_name"
							onChange={handleFormChanges}
							type="text"
						/>
					</Fragment>
					<Fragment>
						<span className="span-staric">*</span>
						<div className="horizontally">
							<input
								placeholder="Full Name"
								name="full_name"
								value={
									fullNameStatus
										? `${formData.first_name} ${formData.last_name}`
										: formData.full_name
								}
								onChange={
									!fullNameStatus
										? handleFormChanges
										: undefined
								}
								type="text"
								className="w-100"
							/>
							<Strip
								onClick={() => {
									setFullNameStatus(
										(prevState) => !prevState
									);
								}}
								status={!fullNameStatus}
							/>
						</div>
					</Fragment>
					<Fragment>
						<input
							onChange={handleFormChanges}
							type="number"
							value={formData.contact_number}
							name="contact_number"
							placeholder="Contact No."
						/>
					</Fragment>
					<Fragment>
						<span className="span-staric">*</span>
						<input
							onChange={handleFormChanges}
							type="number"
							name="cnic"
							value={formData.cnic}
							placeholder="CNIC"
						/>
					</Fragment>
					<Fragment>
						<input
							onChange={handleFormChanges}
							type="url"
							name="image_url"
							value={formData.image_url}
							placeholder="Image URL"
						/>
					</Fragment>
					<Fragment>
						<span className="span-staric">*</span>
						<div className="horizontally-center gender">
							<p>Gender</p>
							<div className="horizontally-center first-label">
								<label htmlFor="male">Male</label>
								<input
									onChange={handleFormChanges}
									type="radio"
									name="gender"
									id="male"
									value="male"
									checked={formData.gender === "male"}
								/>
							</div>
							<div className="horizontally-center">
								<label htmlFor="female">Female</label>
								<input
									onChange={handleFormChanges}
									type="radio"
									name="gender"
									value="female"
									id="female"
									checked={formData.gender === "female"}
								/>
							</div>
						</div>
					</Fragment>
					<Fragment>
						<span className="span-staric" style={{ marginTop: 40 }}>
							*
						</span>
						<textarea
							onChange={handleFormChanges}
							name="about"
							placeholder="Tell about student with details..."
							rows={5}
							value={formData.about}
						/>
					</Fragment>
					<Fragment>
						<button
							disabled={!checkFormValidation()}
							style={{
								backgroundColor: checkFormValidation()
									? "rgb(34, 100, 175)"
									: undefined,
								color: checkFormValidation()
									? "white"
									: undefined,
								borderColor: checkFormValidation()
									? "rgb(34, 100, 175)"
									: undefined,
								boxShadow: !checkFormValidation()
									? "none"
									: undefined,
								cursor: !checkFormValidation()
									? "default"
									: undefined,
							}}
							onClick={(e) => onAdd(e, formData)}
						>
							Add
						</button>
					</Fragment>
				</div>
			</div>
		</>
	);
};
export default Form;

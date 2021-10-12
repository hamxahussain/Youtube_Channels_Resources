import React, { useState, useEffect } from "react";
import { MdSwitchAccount } from "react-icons/all";
import Strip from "./private/Strip";

const Form = ({ children, onAdd = (event, data) => null, ...props }) => {
	const [form, setForm] = useState({
		first_name: "",
		last_name: "",
		full_name: "",
		cnic: "",
		contact_number: "",
		gender: "",
		about: "",
		image_url: "",
	});
	const [fullNameStatus, setFullNameStatus] = useState(true);

	const handleFormChanges = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnlyFullName = (e) => {};

	const checkFormValidation = () => {
		return (form.about &&
			form.cnic &&
			form.first_name &&
			form.last_name &&
			form.full_name &&
			form.about &&
			form.gender) === ""
			? false
			: true;
	};
	useEffect(() => {
		if (fullNameStatus === true) {
			setForm({
				...form,
				full_name: `${form.first_name} ${form.last_name}`,
			});
		}
	}, [form.full_name, form.last_name, fullNameStatus]);
	return (
		<>
			<div className="self-start flex add-w-100 scroll-auto">
				<div className="form flex">
					<h3>
						<MdSwitchAccount className="student-icon" />
						Student Form
					</h3>
					<span className="span-staric">*</span>
					<input
						onChange={handleFormChanges}
						type="text"
						name="first_name"
						placeholder="First Name"
						value={form.first_name}
					/>
					<span className="span-staric">*</span>
					<input
						onChange={handleFormChanges}
						type="text"
						name="last_name"
						placeholder="Last name"
						value={form.last_name}
					/>
					<span className="span-staric">*</span>
					<div className="horizontally">
						<input
							onChange={!fullNameStatus && handleFormChanges}
							type="text"
							name="full_name"
							placeholder="Full Name"
							className="w-100"
							value={
								fullNameStatus
									? `${form.first_name} ${form.last_name}`
									: form.full_name
							}
							disabled={fullNameStatus}
						/>
						<Strip
							onClick={() =>
								setFullNameStatus((prevState) => !prevState)
							}
							status={!fullNameStatus}
						/>
					</div>

					<input
						onChange={handleFormChanges}
						type="number"
						value={form.contact_number}
						name="contact_number"
						placeholder="Contact No."
					/>
					<span className="span-staric">*</span>
					<input
						onChange={handleFormChanges}
						type="text"
						name="cnic"
						value={form.cnic}
						placeholder="CNIC"
					/>
					<input
						onChange={handleFormChanges}
						type="url"
						name="image_url"
						value={form.image_url}
						placeholder="Image URL"
					/>
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
								checked={form.gender === "male"}
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
								checked={form.gender === "female"}
							/>
						</div>
					</div>
					<span className="span-staric" style={{ marginTop: 40 }}>
						*
					</span>
					<textarea
						onChange={handleFormChanges}
						name="about"
						placeholder="Tell about student with details..."
						rows="5"
						value={form.about}
					/>
					<button
						disabled={!checkFormValidation()}
						style={{
							backgroundColor:
								checkFormValidation() && "rgb(34, 100, 175)",
							color: checkFormValidation() && "white",
							borderColor:
								checkFormValidation() && "rgb(34, 100, 175)",
							boxShadow: !checkFormValidation() && "none",
							cursor: !checkFormValidation() && "default",
						}}
						onClick={(e) => onAdd(e, form)}
					>
						Add
					</button>
				</div>
			</div>
		</>
	);
};

export default Form;

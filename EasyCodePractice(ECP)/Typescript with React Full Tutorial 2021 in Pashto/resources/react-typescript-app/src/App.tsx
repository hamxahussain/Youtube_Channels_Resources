import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Form, { IForm } from "./components/Form";
import ItemList from "./components/ItemList";
import { IDType } from "./components/private/ChangesComponent";

function App() {
	const [allUsersData, setAllUsersData] = useState<IForm[]>([]);
	const [latestUsersData, setLatestUsersData] =
		useState<IForm[]>(allUsersData);
	const [searchValue, setSearchValue] = useState<string>("");

	const handleOnAdd = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		data: IForm
	) => {
		const isUserExist =
			allUsersData.length > 0 &&
			allUsersData
				.map((student) => {
					if (student.cnic === data.cnic) {
						return false;
					} else {
						return true;
					}
				})
				.includes(false);

		if (isUserExist) {
			alert("Student is already exist with the same CNIC.");
		} else {
			setAllUsersData([...allUsersData, data]);
		}
	};
	const handleDeleteUser = (
		event: React.MouseEvent<SVGElement, MouseEvent>,
		cnic: IDType
	) => {
		const result = allUsersData.filter((item) => item.cnic !== cnic);
		setAllUsersData(result);
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	React.useEffect(() => {
		const result = allUsersData.filter((item) => {
			if (searchValue === "") return item;

			return item.full_name
				.toLowerCase()
				.includes(searchValue.toLowerCase());
		});
		setLatestUsersData(result);
	}, [searchValue, allUsersData]);

	return (
		<div>
			<Title />
			<div className="remove-horizontal horizontally-center">
				<Form onAdd={handleOnAdd} />
				<ItemList
					userInfo={latestUsersData}
					onDelete={handleDeleteUser}
					onChangeSearch={handleSearch}
				/>
			</div>
		</div>
	);
}

export default App;

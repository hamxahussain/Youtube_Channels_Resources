import "./App.css";
import React, { useState } from "react";
import ItemList from "./components/ItemList";
import Title from "./components/Title";
import Form from "./components/Form";

function App() {
	const [allData, setAllData] = useState([]);
	const [sendingData, setSendingData] = useState(allData);
	const [userSearched, setUserSearched] = useState("");

	const handleAddUser = (e, form) => {
		const isUserExist =
			allData.length > 0 &&
			allData
				.map((student) => {
					if (student.cnic === form.cnic) {
						return false;
					}
				})
				.filter((item) => item === false)
				.includes(false);

		if (isUserExist) {
			alert("Student is already exist with the same CNIC.");
		} else {
			setAllData([...allData, form]);
		}
	};
	const handleDeleteUser = (id) => {
		const result = allData.filter((item) => item.cnic !== id);
		setAllData(result);
	};
	const handleSearch = (e) => setUserSearched(e.target.value);

	React.useEffect(() => {
		const result = allData.filter((item) => {
			if (item === "") return item;
			return item.full_name
				.toLowerCase()
				.includes(userSearched.toLowerCase());
		});
		setSendingData(result);
	}, [userSearched, allData]);
	return (
		<div>
			<Title />
			<div className="remove-horizontal horizontally-center">
				<Form onAdd={handleAddUser} />
				<ItemList
					userInfo={sendingData}
					onDelete={handleDeleteUser}
					onChangeSearch={handleSearch}
				/>
			</div>
		</div>
	);
}

export default App;

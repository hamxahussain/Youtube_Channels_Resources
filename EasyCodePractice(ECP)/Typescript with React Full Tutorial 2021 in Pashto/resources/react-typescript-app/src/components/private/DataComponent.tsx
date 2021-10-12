import React from "react";
import { Img } from "react-image";
import {
	AiOutlinePhone,
	AiOutlineIdcard,
	FcAbout,
	CgProfile,
} from "react-icons/all";
import Separator from "./Separator";
import { IForm } from "./../Form";

interface IProps {
	userInfo: IForm;
}

const DataComponent: React.FC<IProps> = ({
	userInfo,
	...props
}): JSX.Element => {
	return (
		<>
			<div>
				<div className="horizontally-center">
					<Img
						src={userInfo.image_url}
						alt="profile-img"
						className="profile-image"
						unloader={<CgProfile size={80} />}
						loader={<CgProfile size={80} />}
					/>
					<div className="image-front-info">
						<h4>{userInfo.full_name}</h4>
						<p>{userInfo.gender}</p>
					</div>
				</div>
				<div className="details">
					{userInfo.contact_number &&
						userInfo.contact_number.toString().length > 0 && (
							<p className="phone">
								<AiOutlinePhone
									color="green"
									size={16}
									style={{ marginRight: 5 }}
								/>
								{userInfo.contact_number}
							</p>
						)}
					<p className="cnic">
						<AiOutlineIdcard
							color="red"
							size={16}
							style={{ marginRight: 5, marginBottom: -3 }}
						/>
						{userInfo.cnic}
					</p>
					<p className="about">
						<FcAbout
							size={16}
							style={{ marginRight: 8, marginBottom: -3 }}
						/>
						{userInfo.about}
					</p>
				</div>
				<Separator margin="10px 0 2px 0" />
				<Separator />
			</div>
		</>
	);
};

export default DataComponent;

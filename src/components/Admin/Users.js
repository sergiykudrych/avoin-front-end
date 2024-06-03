import React, { useEffect, useState } from 'react';
import { API_URL } from '../../http';
import UserService from '../../services/UserService';
import { FaPen } from 'react-icons/fa6';
import Modal from './Modal';

const Users = () => {
	const [users, setUsers] = useState([]);
	const [searchUsers, setSearchUsers] = useState([]);
	const [search, setSearch] = useState('');
	const [visible, setVisible] = useState(false);
	const [userInfo, setUserInfo] = useState({
		email: '',
		id: '',
		role: ''
	});
	const getUsers = async () => {	
		try {
			const response = await UserService.fetchUsers()
			setUsers(response.data);
			setSearchUsers(response.data)
		} catch (error) {
			console.log(error.response);
			return error.response
		}
	}

	useEffect(() => {
		getUsers()
	},[]);

	const findUser = (e) => {
		let value = e.target.value.toLowerCase();
		setSearch(value);
		let result = users.filter((user) => user.email.toLowerCase().includes(value));
		setSearchUsers(result);
	}

	const updateRole = async (id, email) => {
		setVisible(true);
		setUserInfo({
			email: email,
			id: id
		})
	}


	return (
		<div className='block'>
				<div className="block-top">
					{searchUsers.length > 0 ? <h2 className='block-title'>Користувачі:</h2> : <h2 className='block-title'>Користувачів немає</h2>}
					<input type="search" placeholder="Пошук" value={search} onChange={findUser} />
				</div>
				<div className='block-main'>
					{searchUsers.map((user) => (
						<div key={user.email} className='block-main__item main__item'>
							<h3 className='main__item-email'>{user.email}</h3>
							<p className='main__item-name'>{user.userName}</p>
							{user.userImage ? <img src={API_URL + '/'+ user.userImage} alt=" User def" /> : <img src="./img/default.png" alt=" User def" />}
							<div className="main__item-active">{user.active ? "Активований" : "Не активований"}</div>
							<div className='main__item-role'>{user.role}</div>
							<div className="main__buttons">
								<button className='edit' onClick={() => updateRole(user._id, user.email)}> <FaPen  /></button>
							</div>
						</div>
					))}
				</div>
				{visible && <Modal  setVisible={setVisible} userInfo={userInfo}/>}
			</div>
	);
};

export default Users;
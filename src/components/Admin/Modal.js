import React, { useState } from 'react';
import UserService from '../../services/UserService';

const Modal = ({setVisible, userInfo}) => {

	const [role, setRole] = useState('');

	const updateRole = async (id, role) => {
		try {
			await UserService.updateRole(id, role)
			window.location.reload()
		} catch (error) {
			console.log(error.response);
			return error.response
		}
	}
	return (
		<div className='modal'>
					<div className='modal__content'>
						<h2>Ви дійсно хочете змінити роль користувача {userInfo.email}?</h2>

						<div className="modal__roles">
							<button className="model__roles-item " onClick={() => setRole('ADMIN')}>ADMIN</button>
							<button className="model__roles-item " onClick={() => setRole('MODERATOR')}>MODERATOR</button>
							<button className="model__roles-item " onClick={() => setRole('USER')}>USER</button>
						</div>
						<div className='modal__buttons'>
							<button className='modal__button update'  onClick={() => updateRole(userInfo.id, role)} disabled={role === ''}>Змінити</button>
							<button className='modal__button cancel' onClick={() => setVisible(false)}>Відмінити</button>
						</div>
					</div>
				</div>
	);
};

export default Modal;
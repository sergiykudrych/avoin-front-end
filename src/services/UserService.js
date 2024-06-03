import api from "../http";
export default class UserService {
	static fetchUsers() {
		return api.get('/users')
	}
	static updateUserInfo(email, userName, userImage) {
		return api.post('/update-user-info', {email, userName, userImage})
		.then(response => response.data)
	}
	static updateRole(id, role) {
		return api.post('/update-user-role/' + id, {role})
		.then(response => response.data)
	}
}

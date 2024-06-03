import api from "../http";
export default class createCategory {
	static getCategory() {
		return api.get('/category')
	}
	static createCategory(title,slug) {
		return api.post('/create-category', {title, slug})
		.then(response => response.data)
	}
	static removeCategory(title) {
		return api.delete('/remove-category/'+ title)
		.then(response => response.data)
	}
}

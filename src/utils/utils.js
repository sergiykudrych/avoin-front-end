import axios from "axios";
import { API_URL } from "../http";
import ProductService from "../services/ProductService";

export const uploadImage = async (formData, slug) => {
	const { data } = await axios.post(API_URL + '/api/upload', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		},
		params: {
			slug: slug
	}
	});
	return data;
}

export const fetchData = async (slug) => {
	try {
		const response = await ProductService.getProduct(slug);
		return response.data;
	} catch (error) {
		console.log(error.response);
		return error.response;
	}
};

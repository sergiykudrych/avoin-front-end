import ProductService from '../../services/ProductService';
export const updateRequest = async (title, description, price, images, category, slug, id) => {
	try {
		const response = await ProductService.updateProduct(title, description, price, images, category, slug, id)
		if(response.status === 200) {
			setTimeout(() => {
				window.location.href = '/product/'+ slug + '?change';
			}, 1000);
		} else {
			console.log(response.data?.message);
		}
	} catch (error) {
	}
}

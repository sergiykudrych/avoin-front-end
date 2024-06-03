import api from '../http';
export default class CreateProduct {
  static createProduct(title, description, price, images, category, slug) {
    return api.post('/create-product', { title, description, price, images, category, slug }).then((response) => response.data);
  }
  // static fetchProducts() {
  //   return api.get('/products');
  // }
  static fetchProducts(category, priceRange) {
    return api.get('/products/' + category, { params: { min: priceRange.min, max: priceRange.max } });
  }
  static fetchProductsSearch(name) {
    return api.get('/products-search/' + name);
  }
  static getProduct(slug) {
    return api.get('/product/' + slug);
  }
  static updateProduct(title, description, price, images, category, slug, id) {
    return api.post('/update-product', { title, description, price, images, category, slug, id });
  }
  static removeProduct(id) {
    return api.delete('/delete-product/' + id);
  }
}

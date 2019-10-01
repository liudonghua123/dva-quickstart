import request from '../utils/request';

export function fetchProducts() {
  return request('/api/products');
}

export function deleteProduct(id) {
  return request(`/api/products/${id}`, {
    method: 'DELETE',
  });
}

let initialProducts = [{ name: 'dva', id: 1 }, { name: 'antd', id: 2 }, { name: 'roadhog', id: 3 }];

export default {
  'GET /api/products': (req, res) => {
    res.json({ data: initialProducts });
  },

  'DELETE /api/products/:id(\\d+)': (req, res) => {
    let { id } = req.params;
    id = parseInt(id);
    initialProducts = initialProducts.filter(product => product.id !== id);
    res.json({ data: initialProducts });
  },
};

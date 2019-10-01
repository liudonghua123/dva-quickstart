import React, { Component } from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

@connect(({ products }) => ({
  products,
}))
export default class Products extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/fetch',
    });
  }
  handleDelete = id => {
    const { dispatch } = this.props;
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  };
  render() {
    const { products } = this.props;
    return (
      <div>
        <h2>List of Products</h2>
        <ProductList onDelete={this.handleDelete} products={products} />
      </div>
    );
  }
}

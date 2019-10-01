import {fetchProducts, deleteProduct} from '../services/products'

export default {
  namespace: 'products',
  state: [],
  reducers: {
    save(state, { payload: {data} }) {
      return [...data]
    },
  },
  effects: {
    *fetch(state, { call, put }) {
      const {data}= yield call(fetchProducts)
      console.info(`fetch data: `, data)
      yield put({type:'save', payload: {data}})
    },
    *delete({payload: id}, { call, put }) {
      const {data}= yield call(deleteProduct, id)
      console.info(`delete data: `, data)
      yield put({type:'fetch'})
    }
  }
};

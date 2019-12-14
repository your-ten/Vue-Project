import {reqAddress,reqCategory,reqShops} from '@/api'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutations_type'
export default {
  async getAddress({commit,state}){
    const {longitude, latitude} = state
    let result = await reqAddress(latitude,longitude)
    if (result.code === 0) {
      const {address} = result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  async getCategorys({commit,}){
    let result = await reqCategory()
    if (result.code === 0) {
      const {categorys} = result.data
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },
  async getShops({commit,state}){
    const {longitude, latitude} = state
    let result = await reqShops({longitude, latitude})
    if (result.code === 0) {
      const {shops} = result.data
      commit(RECEIVE_SHOPS,shops)
    }
  },
}
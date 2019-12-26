import Vue from 'vue'
import {
  // RECEIVE_GOODS,
  // RECEIVE_RATINGS,
  // RECEIVE_INFO,
  RECEIVE_SHOP,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_COUNT
} from '../mutations_type'
import { reqShop } from '@/api'
import {getCartFoods} from '@/utils'
export default {
  state: { 
    // goods:[],
    // ratings:[],
    // info:{},
    shop:{},
    cartFoods:[]
  },
  mutations: {
    /* [RECEIVE_GOODS](state,data){
      state.goods = data
    },
    [RECEIVE_RATINGS](state,data){
      state.ratings = data
    },
    [RECEIVE_INFO](state,data){
      state.info = data
    }, */
    
    [RECEIVE_SHOP](state,{shop={},cartFoods=[]}){
      state.shop = shop
      state.cartFoods = cartFoods
    },
    [ADD_FOOD_COUNT](state,food){
      if (food.count) {
        food.count++
      }else{
        Vue.set(food,'count',1)
        state.cartFoods.push(food)
      }
    },
    [REDUCE_FOOD_COUNT](state,food){
      if (food.count>0) {
        food.count--
        if (food.count === 0) {
          state.cartFoods.splice(state.cartFoods.indexOf(food),1)
        }
      }
    },
    [CLEAR_CART](state){
      state.cartFoods.forEach(food => food.count = 0)
      state.cartFoods = []
    }
  },
  actions: {
    /* async saveGoods({commit}){
      let result = await reqGoods()
      if (result.code === 0) {
        const data = result.data
        commit(RECEIVE_GOODS,data)
      }
    },
    async saveRatings({commit}){
      let result = await reqRatings()
      if (result.code === 0) {
        const data = result.data
        commit(RECEIVE_RATINGS,data)
      }
    },
    async saveInfo({commit}){
      let result = await reqInfo()
      if (result.code === 0) {
        const data = result.data
        commit(RECEIVE_INFO,data)
      }
    }, */
    
    async getShop({commit, state},id){
      if (id == state.shop.id) {
        return
      }
      if (state.shop.id) {
        commit(RECEIVE_SHOP,{})
      }
      let result = await reqShop(id)
      if (result.code === 0) {
        const shop = result.data
        const cartFoods = getCartFoods(shop)
        commit(RECEIVE_SHOP,{shop,cartFoods})
      }
    }, 
    updateFoodCount({commit},{isAdd,food}){
      if (isAdd) {
        commit(ADD_FOOD_COUNT,food)
      }else{
        commit(REDUCE_FOOD_COUNT,food)
      }
    }
  },
  getters: {
    totalCount(state){
      return state.cartFoods.reduce((pre, food) => pre + food.count, 0)
    },
    totalMoney(state){
      return state.cartFoods.reduce((pre, food) => pre + food.count*food.price, 0)
    }
  }
}



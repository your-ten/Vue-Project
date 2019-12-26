import {
  RECEIVE_USER,
  RECEIVE_TOKEN
} from '../mutations_type'
import {reqAutoLogin} from '@/api'
export default {
  state: { 
    user:{},
    token:localStorage.getItem('token_key') || '',
  },
  mutations: {
    [RECEIVE_USER](state,user={}){
      state.user = user
    },
    [RECEIVE_TOKEN](state,token=''){
      state.token = token
    },
  },
  actions: {
    saveUser({commit},user){
      const {token} = user
      localStorage.setItem('token_key',token)
      delete user.token
      commit(RECEIVE_USER,user)
      commit(RECEIVE_TOKEN,token)
    },
    async autoLogin({commit,state}){
      if (state.token && !state.user._id) {
        const result = await reqAutoLogin()
        if (result.code===0) {
          const user = result.data
          commit(RECEIVE_USER, user)
        }
      }
    },
    logout({commit}){
      localStorage.removeItem('token_key')
      commit(RECEIVE_USER)
      commit(RECEIVE_TOKEN)
    },
  },
  getters: {
    
  }
}
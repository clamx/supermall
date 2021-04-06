import Vue from 'vue'
import VueX from 'vuex'
  Vue.use(VueX);
  const store = new VueX.Store({
    state:{
      cartList:[]
    },
    mutations:{
      addToCart(state,payload){
        payload.count = payload.count
      },
      addToProduct(state,payload){
        payload.checked = false
        state.cartList.push(payload)
      }
    },
    actions:{
      addCart(context,payload){
       return new Promise((resolve,reject)=>{
          let oldProduct = null
          for(let item of context.state.cartList){
            if(item.iid === payload.iid && item.size === payload.size
              &&item.color === payload.color){
              oldProduct = item
            }
          }
          if(oldProduct){
            oldProduct.count += payload.count
            context.commit('addToCart',oldProduct)
            resolve('当前商品数量+1')
          }else {
            payload.count = payload.count
            context.commit('addToProduct',payload)
            resolve('添加了新的商品')
          }
        })
       }
      },
    getters: {
      cartLength(state){
        return state.cartList.length
      },
      cartList(state){
        return state.cartList
      }
    }

  })
export default store
